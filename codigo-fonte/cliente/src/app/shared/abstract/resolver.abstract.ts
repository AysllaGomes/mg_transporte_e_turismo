import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { BaseModel } from '../model/base-model';
import { BaseRest} from '../model/base-rest.model';
import {PerfilService} from '../../modules/administracao/perfil/service/perfil.service';

@Injectable()
export abstract class ResolverAbstract<T> implements Resolve<BaseModel<T>> {

    constructor(
        protected baseReset: PerfilService
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
        return new Promise<BaseModel<T>>(resolve => {
            this.baseReset.getById(route.params.id).subscribe(data => {
                resolve(data);
            });
        });
    }
}
