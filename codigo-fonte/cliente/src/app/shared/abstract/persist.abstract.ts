import {OnInit} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';

import Message from '../constant/message.constant';

import {NotificationService} from '../../core/service/notification.service';

interface Persist<T> {
    save(T);

    update(T);
}

export abstract class PersistAbstract<T> implements OnInit {

    form: FormGroup;

    data: T;

    dataId: any;

    isUpdate: boolean;

    isLoading: boolean;

    validationErros: any = {};

    constructor(
        protected router: Router,
        protected endPoint: string,
        protected dataService: Persist<T>,
        protected activatedRoute: ActivatedRoute,
        protected notificationService: NotificationService
    ) {}

    ngOnInit() {
        this.form = this.formInit();
        this.onReceiveData();
    }

    validate = (data: any): ErrorStateMatcher => {
        return {
            isErrorState(
                control: FormControl | null,
                form: FormGroupDirective | NgForm | null
            ): boolean {
                return !!data;
            }
        };
    };

    onSuccess(data: T, result): void {
        this.isLoading = false;
        this.isUpdate
            ? this.notificationService.notify(Message.MSG005)
            : this.notificationService.notify(Message.MSG001);
        this.goBack();
    }

    onError = (errorResponse: HttpErrorResponse): void => {
        this.isLoading = false;
        if (errorResponse.status === 422 && errorResponse.error) {
            this.validationErros = errorResponse.error.errors;
            return this.notificationService.notify(
                errorResponse.error.message || 'Verifique os campos informados'
            );
        }

        if (errorResponse.status === 412 && errorResponse.error) {
            this.validationErros = errorResponse.error.errors;
            return this.notificationService.notify(errorResponse.error.message);
        }
        if (errorResponse.status === 500 && errorResponse.error) {
            this.validationErros = errorResponse.error.errors;
            return this.notificationService.notify(
                errorResponse.error.message || Message.MSG000
            );
        }
        throw errorResponse;
    };

    onComplete = (): void => {
        this.isLoading = false;
    };

    onReceiveData(): void {
        this.activatedRoute.data.subscribe((data: { responseData }) => {
            if (data.responseData && data.responseData.data) {
                this.dataId = data.responseData.data['id'];
                this.form.patchValue(this.transformReceiveData(data.responseData.data));
                this.isUpdate = true;
            }
        });
    }

    abstract formInit(): FormGroup;

    goBack(): void {
        this.router.navigate([`${this.endPoint}`]);
    }

    onSave() {
        if (!this.form.valid) {
            this.notificationService.notify(Message.MSG004);
            return;
        }
        let data = Object.assign({}, this.form.value) as T;
        data['id'] = this.dataId;
        data = this.transformBeforeSave(data);
        this.isLoading = true;
        if (this.isUpdate) {
            this.dataService.update(data).subscribe(
                res => {
                    this.onSuccess(data, res);
                },
                this.onError,
                this.onComplete
            );
        } else {
            this.dataService.save(data).subscribe(
                res => {
                    this.onSuccess(data, res);
                },
                this.onError,
                this.onComplete
            );
        }
    }

    transformBeforeSave(data: T): T {
        return data;
    }

    transformReceiveData(data: T): T {
        return data;
    }
}
