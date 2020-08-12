import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpUtilsService } from './http-utils.service';

import { environment } from '../../../environments/environment';

import { Option } from '../model/option.model';
import { ResponsavelAvaliacao } from '../model/responsavel-avaliacao.model';
import { FlAfastamentoServidor } from '../model/fl-afastamento-servidor.model';

@Injectable({
    providedIn: 'root'
})
export class DomainService {

    constructor(
        protected http: HttpClient,
        protected httpUtilsService: HttpUtilsService
    ) {}

    get url(): any {
        return `${environment.api}`;
    }

    getUser(user): Observable<any> {
        return this.http.get(`${this.url}/usuario/${user}`);
    }

    getRegistrationNumberSiape(registrationNumber): Observable<any> {
        return this.http.get(`${this.url}/servidor/${registrationNumber}`);
    }

    /**
     * Retorna a lista disponível onde informa o tipo de necessidade de afastamento do servidor.
     *
     * Returns the available list where it informs the type of need to leave the server.
     * @param filter
     */
    listFlAnaliseAfastamentoServidor(filter: any = null): Observable<Option[]> {
        return new Observable(observer => {
            // O timeout é necessário para evitar que a label do dropbox nao fique bugado
            // ela acaba ficando levantada caso o retorno do observable fique
            setTimeout(() => {
                observer.next([
                    new Option(FlAfastamentoServidor.AUTHORIZED,  FlAfastamentoServidor.AUTHORIZED_NAME),
                    new Option(FlAfastamentoServidor.DENIED, FlAfastamentoServidor.DENIED_NAME),
                    new Option(FlAfastamentoServidor.ANALYZE, FlAfastamentoServidor.ANALYZE_NAME)
                ]);
            }, 1000);
        });
    }

    /**
     * Retorna a lista pelo resposável avaliador, onde informa se é 'Servidor Avaliado', 'Pares da Equipe' ou 'Avaliador'.
     *
     * Returns a list of the responsible evaluator, where information is 'Authorized server', 'Team pairs' or 'Evaluator'.
     * @param filter
     */
    listResponsavelPelaAvaliacao(filter: any = null): Observable<Option[]> {
        return new Observable(observer => {
            // O timeout é necessário para evitar que a label do dropbox nao fique bugado
            // ela acaba ficando levantada caso o retorno do observable fique
            setTimeout(() => {
                observer.next([
                    new Option(ResponsavelAvaliacao.AUTHORIZED_SERVER, ResponsavelAvaliacao.AUTHORIZED_SERVER_NAME),
                    new Option(ResponsavelAvaliacao.TEAM_PAIRS, ResponsavelAvaliacao.TEAM_PAIRS_NAME),
                    new Option(ResponsavelAvaliacao.EVALUATOR, ResponsavelAvaliacao.EVALUATOR_NAME)
                ]);
            }, 1000);
        });
    }

    /**
     * Retorna uma lista de unidades adminstrativas
     *
     * @param filter
     */
    listAdministrativeUnit(filter: any = null): Observable<any> {
        const requestOptions = Object.assign({}, this.httpUtilsService.requestOptions);

        filter = this.httpUtilsService.removeNullFromObject(filter);

        requestOptions['params'] = Object.assign({}, filter);

        return this.http.get(`${this.url}/unidades`, requestOptions)
            .pipe(catchError(this.httpUtilsService.handleError));
    }

    /**
     * Retorna uma lista de unidades adminstrativas
     *
     * @param filter
     */
    listTipoAprovacao(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/tipo-aprovacoes`,
            filter
        );
    }

    /**
     * Retorna uma lista de motivos de aprovação
     *
     * @param filter
     */
    listMotivoAprovacao(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/motivos`,
            filter
        );
    }

    /**
     * Retorna uma lista de unidades adminstrativas
     *
     * @param filter
     */
    listUnidadeAvaliacao(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/unidades`,
            filter
        );
    }

    /**
     * Retorna uma lista de unidades subordinadas
     *
     * @param filter
     */
    listUnidadeSubordinadas(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/subordinadas`,
            filter
        );
    }

    /**
     * Retorna uma lista de unidades subordidas de acordo com o relacionamento com cd_unidade_avaliacao
     * @param {number} cd_unidade_avaliacao
     */
    listUnidadeSubordinadasByCdUnidadeAvaliacao(cd_unidade_avaliacao: number): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/subordinadas/${cd_unidade_avaliacao}`
        );
    }

    /**
     * Retorna uma lista de unidades subordinadas
     *
     * @param filter
     */
    listGratificacoes(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/gratificacoes`,
            filter
        );
    }

    /**
     * Retorna uma lista de perfis
     *
     * @param filter
     */
    listProfile(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/profile`,
            filter
        );
    }

    /**
     * Retorna uma lista de unidades de metas
     *
     * @param filter
     */
    listUnidadesMetas(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/metas`,
            filter
        );
    }

    /**
     * Retorna uma lista de pessoas
     *
     * @param filter
     */
    listPerson(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/membro-pessoa`,
            filter
        );
    }

    /**
     * Retorna uma lista de pessoas do perfil GESTOR_SETORIAL
     *
     * @param filter
     */
    listPersonByCdPlanoTrabalho(filter: any = null): Observable<any> {
        const requestOptions = Object.assign({}, this.httpUtilsService.httpOptions);

        requestOptions['params'] = Object.assign(
            {},
            {'cd_plano_trabalho': filter.cd_plano_trabalho}
        );
        return this.http.get<any>(`${this.url}/membro-pessoa/unidade-avaliacao`, requestOptions)
            .pipe(catchError(this.httpUtilsService.handleError));
    }

    /**
     * Retorna uma lista de pessoas do perfil PONTO FOCAL
     *
     * @param filter
     */
    listPersonPontoFocalByCdPlanoTrabalho(filter: any = null): Observable<any> {
        const requestOptions = Object.assign({}, this.httpUtilsService.httpOptions);

        requestOptions['params'] = Object.assign(
            {},
            {'cd_plano_trabalho': filter.cd_plano_trabalho}
        );
        return this.http.get<any>(`${this.url}/membro-pessoa/unidade-subordinadas`, requestOptions)
            .pipe(catchError(this.httpUtilsService.handleError));
    }

    /**
     * Retorna uma lista de pessoas do perfil PONTO FOCAL
     *
     * @param filter
     */
    listPersonChefiaByCdPlanoTrabalho(filter: any = null): Observable<any> {
        const requestOptions = Object.assign({}, this.httpUtilsService.httpOptions);

        requestOptions['params'] = Object.assign(
            {},
            {'cd_plano_trabalho': filter.cd_plano_trabalho}
        );
        return this.http.get<any>(`${this.url}/membro-pessoa/chefia`, requestOptions)
            .pipe(catchError(this.httpUtilsService.handleError));
    }

    /**
     * Retorna uma lista de tipos de avaliações
     *
     * @param filter
     */
    listTypeEvoluation(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/avaliacoes`,
            filter
        );
    }

    /**
     * Retorna uma lista de perguntas
     *
     * @param filter
     */
    listPerguntas(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/perguntas`,
            filter
        );
    }

    /**
     * Retorna uma lista de tipos de fase
     *
     * @param filter
     */
    listPhaseType(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/tipos`,
            filter
        );
    }

    /**
     * Retorna uma lista de cilos
     *
     * @param filter
     */
    listCycle(filter: any = null): Observable<any> {
        return this.httpUtilsService.list(
            this.http,
            `${this.url}/ciclos`,
            filter
        );
    }

}
