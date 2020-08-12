import { Component, Input, OnInit } from '@angular/core';

import { MenuItem } from '../../shared/interface/menu-item';

@Component({
    selector: '[app-dropdown]',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

    @Input()
    titulo: string;

    @Input()
    menuItem: MenuItem[];

    open: boolean;

    constructor() {}

    ngOnInit() {}

    toggleMenu() {
        this.open = !this.open;
    }

}
