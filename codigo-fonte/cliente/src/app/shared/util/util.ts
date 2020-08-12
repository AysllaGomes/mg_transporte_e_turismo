import { PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { distinctUntilChanged } from 'rxjs/operators';

import { MaskPhonePipe } from '../pipe/mask-phone.pipe';

export class Util {

    public static maskControl(controle: AbstractControl, mascara: PipeTransform) {

        if (mascara instanceof MaskPhonePipe) {
            controle.valueChanges.subscribe(value => {
                controle.patchValue(mascara.transform(value), {emitEvent: false});
            });

            return;
        }

        controle.valueChanges.pipe(distinctUntilChanged()).subscribe(value => {
            controle.patchValue(mascara.transform(value), {emitEvent: false});
        });

    }

}
