import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IconHomeComponent } from './icons/icon-home/icon-home.component';
import { IconFilterComponent } from './icons/icon-filter/icon-filter.component';
import { IconChevronComponent } from './icons/icon-chevron/icon-chevron.component';
import { IconHamburgerComponent } from './icons/icon-hamburger/icon-hamburger.component';
import {NotificationService} from "./service/notification.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    declarations: [
        IconHomeComponent,
        IconFilterComponent,
        IconChevronComponent,
        IconHamburgerComponent
    ],
    exports: [
        IconHomeComponent,
        IconFilterComponent,
        IconChevronComponent,
        IconHamburgerComponent
    ],
    providers: [
    ]
})
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [NotificationService]
        };
    }

}
