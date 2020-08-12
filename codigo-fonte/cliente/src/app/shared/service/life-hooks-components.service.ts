import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormMessage } from './form-message-lang/form-message';

@Injectable()
export class LifeHookComponentsService {

    protected formMessage: FormMessage;
    onGridChanged: BehaviorSubject<any>;
    onChangeEvent: BehaviorSubject<any>;
    constructor() {
        this.onGridChanged = new BehaviorSubject([]);
        this.onChangeEvent = new BehaviorSubject([]);
    }

    onGridChangeEvent(event): any {
        this.onGridChanged.next(event);
    }

    /**
     * @description Informa o componente que houve mudanças {SelectUnidadeSubordinadaComponent}
     * @param event
     */
    onChangeEventComponent(event): any {
        this.onChangeEvent.next(event);
    }
}
