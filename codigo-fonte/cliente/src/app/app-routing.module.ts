import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Angulartics2Module } from 'angulartics2';

import { HomeComponent } from './home/home.component';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: '/pagina-nao-encontrada',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        Angulartics2Module.forRoot({})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
