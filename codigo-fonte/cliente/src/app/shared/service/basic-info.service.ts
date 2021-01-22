import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { DadosBasicos } from '../interface/dados-basicos';

@Injectable({
    providedIn: 'root'
})
export class BasicInfoService {

    info = {
        orgaoClassificacao: 'Ministério',
        orgaoTema: 'Economia',
        orgaoNome: 'Ministério da Economia',
        unidadeClassificacao: 'Secretaria',
        unidadeTema: 'MG Transporte & Turismo',
        unidadeNome: 'MG Transporte & Turismo',
        sistemaNome: 'MG Transporte & Turismo',
        descricao: 'MG Transporte & Turismo',
        idioma: 'pt-br'
    };

    dadosBasicos = new BehaviorSubject<DadosBasicos>(null);

    constructor() {}

    getInfo() {
        return this.info;
    }

}
