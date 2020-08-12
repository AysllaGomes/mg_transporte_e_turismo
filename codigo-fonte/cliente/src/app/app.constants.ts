import {environment} from "../environments/environment";

export const API_BASE = environment.api;

export const PATH = {

    ADMINISTRACAO: 'administracao',
    PERFIL: 'perfil',
    USUARIO: 'usuario',
    SITUACAO: 'situacao',
    PESQUISA: 'pesquisa',
    ACAO: {
        ADD: 'add',
        EDIT: 'edit/:id',
        DETAIL: 'detail/:id'
    }

};
