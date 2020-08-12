import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Angulartics2Piwik } from 'angulartics2/piwik';

import { BasicInfoService } from './shared/service/basic-info.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        protected router: Router,
        protected basicInfoService: BasicInfoService,
        private angulartics2Piwik: Angulartics2Piwik
    ) {
        angulartics2Piwik.startTracking();
    }

    ngOnInit() {}

}
