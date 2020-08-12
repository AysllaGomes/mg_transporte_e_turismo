import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DropdownComponent } from './dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    declarations: [
        DropdownComponent
    ],
    exports: [
        DropdownComponent
    ],
    providers: [
    ]
})
export class DropdownModule {}
