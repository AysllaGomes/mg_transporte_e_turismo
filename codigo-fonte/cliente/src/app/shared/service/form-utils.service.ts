import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

import * as moment from 'moment';

import { FormMessageService } from './form-message.service';

@Injectable({
    providedIn: 'root'
})
export class FormUtilsService {

    protected _when: string[] = ['dirty', 'touched'];

    constructor(
        protected formMessageService: FormMessageService
    ) {}

    get when(): string[] {
        return this._when;
    }

    get(form: AbstractControl, index: string): AbstractControl {

        const controlNameList = index.split('.');

        let control = form;

        let controlName: string;

        while (controlName = controlNameList.shift()) {
            control = control.get(controlName);
        }

        return control;

    }

    showValidationMessage(control: AbstractControl) {
        let verifyStatus: boolean;
        for (const status of this.when) {
            verifyStatus = verifyStatus || control[status];
        }
        return control.invalid && (verifyStatus);
    }

    /**
     * Retorna o texto relativo a mensagem de validação do campo.
     * @param control
     * @param messageName
     */
    getMessage(control: AbstractControl, messageName: string): string {

        const messageCallback = this.formMessageService[messageName];

        return messageCallback
            ? messageCallback(control)
            : this.formMessageService.messageNotFound;

    }

    convertStringToDate(string: any) {
        return string ? moment(string).toDate() : null;
    }

    validate(formGroup: FormGroup | FormArray): boolean {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);

            control.markAsDirty();

            if (control instanceof FormGroup || control instanceof FormArray) {
                this.validate(control);
            }
        });

        return formGroup.valid;
    }

    getFormValidationErrors(formGroup: FormGroup | FormArray) {
        Object.keys(formGroup.controls).forEach(key => {

            const controlErrors: ValidationErrors = formGroup.get(key).errors;

            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(keyError => {
                    console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
                });
            }

        });
    }

    prepareError(error: string | string[], summary = 'Atenção: ') {

        const message = Array.isArray(error)
            ? error.join('|')
            : error;

        return [{
            severity: 'error',
            summary: summary,
            detail: message
        }];
    }

}
