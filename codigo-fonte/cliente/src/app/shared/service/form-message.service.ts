import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { sprintf } from 'sprintf-js';

import { FormMessage } from './form-message-lang/form-message';
import { FormMessagePt } from './form-message-lang/form-message-pt';

@Injectable({
    providedIn: 'root'
})
export class FormMessageService implements FormMessage {

    protected formMessage: FormMessage;

    constructor() {
        // @todo fazer uma injeção de dependencia para construir o FormMessage com base no idioma utilizado
        this.formMessage = new FormMessagePt();
    }

    get messageNotFound() {
        return this.formMessage.messageNotFound;
    }

    get required() {
        return (control?: AbstractControl) => this.formMessage.required;
    }

    get alphabetic() {
        return (control?: AbstractControl) => this.formMessage.alphabetic;
    }

    get minlength() {
        return (control?: AbstractControl) => {

            let requiredLength: any = control.errors ? control.errors.minlength : null;
            requiredLength = requiredLength ? requiredLength.requiredLength : '';

            return sprintf(this.formMessage.minlength, requiredLength);
        };
    }

    get size() {
        return (control?: AbstractControl) => {
            let bind: any = control.errors ? control.errors.size : null;
            const size = bind.size / 1000;
            bind = size + bind.metric.toUpperCase();
            return sprintf(this.formMessage.size, bind);
        };
    }

    get areEquals() {
        return (control?: AbstractControl) => {
            const bind: any = control.errors ? control.errors.areEquals : null;
            return sprintf(this.formMessage.areEquals, bind);
        };
    }

    get maxlength() {
        return (control?: AbstractControl) => {
            let bind: any = control.errors ? control.errors.maxlength : null;
            bind = bind ? bind.requiredLength : '';
            return sprintf(this.formMessage.maxlength, bind.toString());
        };
    }

    get pattern() {
        return (control?: AbstractControl) => this.formMessage.pattern;
    }

    get rangeLength() {
        return (control?: AbstractControl) => this.formMessage.rangeLength;
    }

    get length() {
        return (control?: AbstractControl) => this.formMessage.length;
    }

    get min() {
        return (control?: AbstractControl) => this.formMessage.min;
    }

    get gt() {
        return (control?: AbstractControl) => this.formMessage.gt;
    }

    get gte() {
        return (control?: AbstractControl) => this.formMessage.gte;
    }

    get max() {
        return (control?: AbstractControl) => this.formMessage.max;
    }

    get lt() {
        return (control?: AbstractControl) => this.formMessage.lt;
    }

    get lte() {
        return (control?: AbstractControl) => this.formMessage.lte;
    }

    get range() {
        return (control?: AbstractControl) => this.formMessage.range;
    }

    get digits() {
        return (control?: AbstractControl) => this.formMessage.digits;
    }

    get number() {
        return (control?: AbstractControl) => this.formMessage.number;
    }

    get url() {
        return (control?: AbstractControl) => this.formMessage.url;
    }

    get email() {
        return (control?: AbstractControl) => this.formMessage.email;
    }

    get date() {
        return (control?: AbstractControl) => this.formMessage.date;
    }

    get minDate() {
        return (control?: AbstractControl) => this.formMessage.minDate;
    }

    get maxDate() {
        return (control?: AbstractControl) => this.formMessage.maxDate;
    }

    get dateISO() {
        return (control?: AbstractControl) => this.formMessage.dateISO;
    }

    get monthYear() {
        return (control?: AbstractControl) => this.formMessage.monthYear;
    }

    get creditCard() {
        return (control?: AbstractControl) => this.formMessage.creditCard;
    }

    get json() {
        return (control?: AbstractControl) => this.formMessage.json;
    }

    get base64() {
        return (control?: AbstractControl) => this.formMessage.base64;
    }

    get phone() {
        return (control?: AbstractControl) => this.formMessage.phone;
    }

    get uuid() {
        return (control?: AbstractControl) => this.formMessage.uuid;
    }

    get equal() {
        return (control?: AbstractControl) => this.formMessage.equal;
    }

    get notEqual() {
        return (control?: AbstractControl) => this.formMessage.notEqual;
    }

    get equalTo() {
        return (control?: AbstractControl) => this.formMessage.equalTo;
    }

    get notEqualTo() {
        return (control?: AbstractControl) => this.formMessage.notEqualTo;
    }

    get cpf() {
        return (control?: AbstractControl) => this.formMessage.cpf;
    }

    get cnpj() {
        return (control?: AbstractControl) => this.formMessage.cnpj;
    }

    get registrationNumberEntity() {
        return (control?: AbstractControl) => this.formMessage.registrationNumberEntity;
    }

    get cep() {
        return (control?: AbstractControl) => this.formMessage.cep;
    }

    get cnae() {
        return (control?: AbstractControl) => this.formMessage.cnae;
    }

    get arrayMinChecked() {
        return (control?: AbstractControl) => {
            let bind: any = control.errors ? control.errors.minlength : null;
            bind = bind ? bind.requiredLength : '';
            return sprintf(this.formMessage.arrayMinChecked, bind);
        };
    }

    get passwordRules() {
        return (control?: AbstractControl) => this.formMessage.passwordRules;
    }

    get required_unless() {
        return (control?: AbstractControl) => this.formMessage.required_unless;
    }

    get requiredWithout() {
        return (control?: AbstractControl) => this.formMessage.requiredWithout;
    }

    get requiredWith() {
        return (control?: AbstractControl) => {
            let bind: any = control.errors ? control.errors.requiredWith : null;
            bind = bind.fieldName;
            return sprintf(this.formMessage.requiredWith, bind);
        };
    }

    get userActivated() {
        return (control?: AbstractControl) => this.formMessage.userActivated;
    }

    get userInactivated() {
        return (control?: AbstractControl) => this.formMessage.userInactivated;
    }

    get socialSecurity() {
        return (control?: AbstractControl) => this.formMessage.socialSecurity;
    }

    get socialSecurityCraftsman() {
        return (control?: AbstractControl) => this.formMessage.socialSecurityCraftsman;
    }

    get minLengthMessage() {
        return (control?: AbstractControl) => {
            const message: any = control.errors ? control.errors.minLengthMessage : null;
            return sprintf(this.formMessage.minLengthMessage, message);
        };
    }

}
