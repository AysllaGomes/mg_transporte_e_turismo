import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RequiresLoginGuard implements CanActivate {

    constructor(protected router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (!!localStorage.getItem('app.token')) { return true; }

        this.router.navigate(['']);

        return false;
    }

}
