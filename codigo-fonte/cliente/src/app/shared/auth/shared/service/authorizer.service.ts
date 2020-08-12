import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

import { Role } from '../../../enum/role.enum';

@Injectable({
    providedIn: 'root'
})
export class AuthorizerService {

    constructor(
        protected authService: AuthService
    ) {}

    /**
     * Verifica se o usuário tem pelo menos uma das roles.
     * Checks if the credential has at least one of the roles.
     *
     * @param roleList
     */
    hasSomeRole(roleList: Role[]): boolean {
        const allRole = this.authService.getTokenRoleString();

        return allRole
            ? roleList.some((role) => allRole.indexOf(`|${role}|`) !== -1)
            : false;
    }

    /**
     * Verifica se o usuário tem todas as roles fornecidas por parâmetro.
     * Checks if the credential has at all of the roles, passing by parameters.
     *
     * @param {Role[]} roleList
     * @returns {boolean}
     */
    hasRole(roleList: Role[]): boolean {

        const allRole = this.authService.getTokenRoleString();

        return allRole
            ? roleList.every((role) => allRole.indexOf(`|${role}|`) !== -1)
            : false;
    }

    isVisible(PermissionList) {
        return this.hasRole(PermissionList);
    }

    /**
     * Verifica se o usuário tem permissão para pesquisar (consultar) a credencial do usuário.
     * Checks whether the credential is allowed to search (query) the credential credential.
     *
     * @returns {boolean}
     */
    canManageCredential(): boolean {
        return this.hasSomeRole([
            Role.CREDENTIAL_INTERNAL_SEARCH,
            Role.CREDENTIAL_SEARCH
        ]);
    }

    /**
     * Verifica se o usuário tem permissão para alterar seus próprios dados.
     * Checks whether the credential is allowed to change their own data.
     *
     * @returns {boolean}
     */
    canMangeSelfData(): boolean {
        return this.hasSomeRole([
            Role.CREDENTIAL_SELF_DATA
        ]);
    }

    canViewModule() {
        return this.hasRole([
            Role.USER_PROFILE_LIST,
            Role.CREDENTIAL_LIST
        ]);
    }

}
