import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { MenuItem } from '../interface/menu-item';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    private menuIten$: MenuItem[];

    mainMenuStatus$: BehaviorSubject<boolean>;

    constructor() {
        this.mainMenuStatus$ = new BehaviorSubject<boolean>(false);
        this.menuIten$ = [];
    }

    getItens(itemPai = null) {
        if (itemPai === null) {
            return this.menuIten$;
        } else {
            return itemPai.items;
        }
    }

}
