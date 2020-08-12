import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

import { isPresent } from '../util/lang';

/**
 * A senha deve ser composta de 8 digitos com no minimo um número, um caractere especial e uma letra maiúscula
 */
function isValid(password: string): boolean {

    const range = '^.*(?=.{8,8})';
    const alphanumeric = '(?=.*[0-9])(?=.*[A-Z])';

    // caracteres especiais validos

    const special = '(?=.*[!@&#$])';
    const final = '.*$';

    const patt = new RegExp(range + alphanumeric + special + final);

    return patt.test(password);
}

export const password: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
    if (
        isPresent(
            Validators.required(control)
        )
    ) { return null; }

    const value: string = control.value;

    return isValid(value)
        ? null
        : { 'passwordRules': true };
};
