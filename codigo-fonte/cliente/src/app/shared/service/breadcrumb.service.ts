import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { MenuItem } from '../interface/menu-item';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {

    breadcrumb = new BehaviorSubject<MenuItem[]>(null);

    breadRotulos = [];

    breacrumbLevels: MenuItem[][][] = [[]];

    constructor() {}

    resetBreacrumb() {

        this.breadcrumb.next([]);
        this.breacrumbLevels = [];
        this.breadRotulos = [];

    }

    getBreacrumb() { return this.breadcrumb; }

}
