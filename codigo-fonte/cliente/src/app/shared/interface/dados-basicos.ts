import { TabelaDeDominio } from '../auth/shared/interface/tabela-de-dominio';

export interface DadosBasicos {

    roles: TabelaDeDominio[];
    ocupacoes: TabelaDeDominio[];
    tiposImovel: TabelaDeDominio[];
    fluxosProposta: TabelaDeDominio[];
    estagiosAlienacao: TabelaDeDominio[];
    situacoesItemEdital: TabelaDeDominio[];
    editalTipoOcorrencias: TabelaDeDominio[];
    fluxosPublicacaoEdital: TabelaDeDominio[];
    entidadesProprietarias: TabelaDeDominio[];

}
