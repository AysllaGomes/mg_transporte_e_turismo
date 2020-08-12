export namespace Administracao {

    export class AfastamentoServidor {
        cd_afastamento_servidor: number;
        nr_codigo: string;
        nm_sigla: string;
        ds_motivo_afastamento: string;
        ds_justificativa: string;
        fl_analise: number;
        ts_inicio: Date;
        ts_fim: Date;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class Avaliacao {
        cd_avaliacao: number;
        nr_nota: string;
        fl_tipo_avaliacao: string;
        avaliado: Pessoa;
        plano_avaliativo: Avaliacao;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class Ciclo {
        cd_ciclo: number;
        nm_ciclo: string;
        ts_inicio: Date;
        ts_fim: Date;
        unidades: CicloUnidadeAvaliacao;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class CronogramaCiclo {
        cd_ciclo_fase: number;
        nm_ciclo_fase: string;
        ts_inicio: Date;
        ts_fim: Date;
        tipo_fase: TipoFase;
        ciclo: Ciclo;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class CicloUnidadeAvaliacao {
        cd_ciclo_unidade_avaliacao: number;
        ciclo: Ciclo[];
        unidade_avaliacao: UnidadeAvaliacao[];
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class CicloUnidadeSubordinacao {
        cd_ciclo_unidade_subordinacao: number;
        ciclo: Ciclo[];
        ciclo_unidade_avaliacao: CicloUnidadeAvaliacao[];
        unidade_avaliacao: UnidadeAvaliacao[];
        unidade_subordinada: UnidadeSubordinada[];
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class DadosSiape {
        cd_dados_siape: number;
        nr_upag: string;
        nm_upag: string;
        ds_sigla_upag: string;
        nr_mat_siape: string;
        nm_orgao_atual: string;
        ds_sigla_orgao_atual: string;
        nm_chefia_imediata: string;
        ds_email_chefia_imediata: string;
        ds_cod_funcao: string;
        ds_cod_urog_exercicio: string;
        ts_inicio_orgao: string;
        ds_email_servidor: string;
        nm_cargo: string;
        nm_funcao: string;
        nm_servidor: string;
        ds_funcao: string;
        ds_gratificacao: string;
        ds_uorg_exercicio: string;
        ds_sigla_lotacao: string;
        ds_ultima_pontuacao: string;
        nm_equipe_trabalho: string;
        nr_identidade: string;
        ds_orgao_emissor_carteira_identidade: string;
        ds_uf_carteira_identidade: string;
        ts_emissao_caretira_identidade: string;
        ds_escolaridade: string;
        ds_bairro_uorg: string;
        nr_cep_uorg: string;
        ds_complemento_uorg: string;
        ds_email_uorg: string;
        ds_logradouro_uorg: string;
        ds_municipio_uorg: string;
        ds_nome_uorg: string;
        ds_sigla_uorg: string;
        ts_ingresso_orgao: string;
        ds_uf_uorg: string;
        nr_codigo_afastamento: string;
        ds_ocorrencia_afastamento: string;
        ts_inicio_fastamento: string;
        ts_fim_fastamento: string;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class EquipeAvaliacao {
        cd_equipe_avaliacao: number
        nr_nota_auto_avaliacao: number;
        nr_nota_avaliacao_chefia: number;
        nr_nota_avaliacao_pares: number;
        nr_media_avaliacao: number;
        servidor: Pessoa;
        plano_avaliativo: PlanoAvaliativo;
        avaliacao: Avaliacao;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class FasePlanoTrabalho {
        cd_fase_plano_trabalho: number;
        nm_fase: string;
        ts_inicio: string;
        ts_fim: string;
        tipo_fase: TipoFase;
        ciclo: Ciclo;
        plano_trabalho: PlanoTrabalho;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class Gratificacao {
        cd_gratificacao: number;
        nm_gratificacao: string;
        ds_gratificacao: string;
        ds_justificativa: string;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class MembroEquipeTrabalho {
        cd_membro_equipe_trabalho: number;
        cd_plano_trabalho: PlanoTrabalho;
        cd_pessoa: Pessoa;
        cd_perfil: Perfil;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class MetaIntermediaria {
        cd_meta_intermediaria: number;
        ds_meta: string;
        ds_indicador: string;
        ds_formula: string;
        ds_fonte_informacao: string;
        ds_previsao: string;
        ds_realizado: string;
        cd_plano_trabalho: PlanoTrabalho;
        cd_unidade_meta: UnidadeMeta;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class MetaPactuada {
        cd_meta_pactuada: number;
        ds_meta: string;
        fl_pactuada: boolean;
        cd_pessoa: Pessoa;
        cd_plano_trabalho: PlanoTrabalho;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class MotivoAprovacao {
        cd_motivo_aprovacao: number;
        fl_avaliacao: boolean;
        ds_solicitacao_aprovacao: string;
        ds_outro_motivo: string;
        cd_unidade_subordinada: UnidadeSubordinada;
        unidade_subordinada: UnidadeSubordinada;
        cd_avaliado: Pessoa;
        avaliado: Pessoa;
        tipo_aprovacao: TipoAprovacao;
        cd_pessoa_requisitante: Pessoa;
        requisitante: Pessoa;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class MotivoPlanoTrabalho {
        cd_motivo_plano_trabalho: number;
        cd_motivo_aprovacao: MotivoAprovacao;
        cd_pessoa: Pessoa;
        cd_plano_trabalho: PlanoTrabalho;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class Perfil {
        static ADMIN = 1;
        static GESTOR_SETORIAL = 2;
        static PONTO_FOCAL = 3;
        static AVALIADOR = 4;
        static AVALIADO = 5;

        cd_perfil: number;
        nm_perfil: string;
        ds_perfil: string;
        ds_competencia: string;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class Pergunta {
        cd_pergunta: number;
        ds_pergunta: string;
        ds_justificativa?: string;
        nr_peso: number;
        fl_avalia: number;
        cd_gratificacao: Gratificacao;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class PerguntaAvaliacao {
        cd_pergunta_avaliacao: number;
        nr_nota_pergunta: number;
        cd_avaliacao: Avaliacao;
        cd_avaliador: Pessoa;
        cd_pergunta: Pergunta;
        ts_criado: Date;
        fl_tipo_avaliacao: string;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class PerguntaGratificacao {
        cd_pergunta_gratificacao: number;
        cd_pergunta: Pergunta;
        cd_gratificacao: Gratificacao;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class Pessoa {
        cd_pessoa: number;
        nm_pessoa: string;
        nr_cpf: string;
        ds_email: string;
        nr_celular?: string;
        nr_telefone?: string;
        nr_ramal: string;
        unidade_avaliacao: UnidadeAvaliacao;
        siape: DadosSiape;
        cd_siape: DadosSiape;
        perfil: Perfil;
        cd_unidade_subordinada?: UnidadeSubordinada;
        ts_atualizado: Date;
        ts_removido: Date;
        ts_criado: Date;
    }

    export class PlanoAvaliativo {
        cd_plano_avaliativo: number;
        cd_ciclo: Ciclo;
        avaliacao: Avaliacao;
        plano_trabalho: PlanoTrabalho;
        unidade_avaliacao: UnidadeAvaliacao;
        unidade_subordinada: UnidadeSubordinada;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class PlanoTrabalho {
        cd_plano_trabalho: number;
        ds_escopo?: string;
        nm_equipe_trabalho: string;
        cd_unidade_avaliacao: UnidadeAvaliacao;
        cd_unidade_subordinada?: UnidadeSubordinada;

        ciclo: Ciclo;
        plano_fase: FasePlanoTrabalho;

        unidade_avaliacao: UnidadeAvaliacao;
        unidade_subordinada?: UnidadeSubordinada;

        gestor_setorial: Pessoa;
        gestor_setorial_siape: DadosSiape;
        suplente_gestor?: Pessoa;
        suplente_gestor_siape: DadosSiape;

        ponto_focal: Pessoa;
        ponto_focal_siape: DadosSiape;
        suplente_ponto?: Pessoa;
        suplente_ponto_siape?: DadosSiape;

        chefia: Pessoa;
        chefia_siape: DadosSiape;
        substituto_chefia?: Pessoa;
        substituto_chefia_siape?: DadosSiape;

        meta_pactuada?: MetaPactuada;
        membro_equipe?: MembroEquipeTrabalho;
        meta_intermediaria?: MetaIntermediaria;

        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class TipoAprovacao {
        cd_tipo_aprovacao: number;
        nm_tipo_aprovacao: string;
        ds_justificativa: string;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class TipoFase {
        cd_tipo_fase: number;
        nm_tipo_fase: string;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class UnidadeAvaliacao {
        cd_unidade_avaliacao: number;
        nm_unidade: string;
        ds_sigla_unidade: string;
        ds_justificativa: string;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class UnidadeMeta {
        cd_unidade_meta: number;
        nm_unidade: string;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

    export class UnidadeSubordinada {
        cd_unidade_subordinada: number;
        nm_unidade_subordinada: string;
        ds_sigla_unidade: string;
        ds_sigla_siape: string;
        subordinada: UnidadeSubordinada;
        unidade_avaliativa: UnidadeAvaliacao;
        ts_criado: Date;
        ts_atualizado: Date;
        ts_removido: Date;
    }

}
