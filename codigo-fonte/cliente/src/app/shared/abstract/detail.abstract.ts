import { OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

export abstract class DetailAbstract<T> implements OnInit {

    data: T;

    hideActions = false;

    serverOptions: any;
    versaoRegistro: any;

    constructor(
        protected router: Router,
        protected location: Location = null,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.onReceiveData();
    }

    onReceiveData(): void {
        this.activatedRoute.data.subscribe((data: { responseData }) => {
            this.serverOptions = data;

            if (data.responseData) {
                this.data = this.transformReceiveData(data.responseData.data);
            }
        });
    }

    transformReceiveData(data): any {
        if (data.nr_versao_registro) {
            this.versaoRegistro = data.nr_versao_registro;
        } else {
            this.versaoRegistro = this.getVersaoRegistro(data);
        }

        if (data.hideActions) {
            this.hideActions = data.hideActions;
        }
        return data;
    }

    getVersaoRegistro(data): number {
        if (data.log && data.log.length) {
            const logs = data.log;
            if (logs) {
                logs.sort((a, b) => {
                    return Number(a.nr_versao_registro) < Number(b.nr_versao_registro);
                });

                return Number(logs[0].nr_versao_registro);
            }
        }
    }
}
