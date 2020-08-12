import { Component, OnInit } from '@angular/core';

import { BreadcrumbService } from '../shared/service/breadcrumb.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        protected breadcrumbService: BreadcrumbService
    ) {}

    ngOnInit() {
        this.breadcrumbService.resetBreacrumb();
    }

}
