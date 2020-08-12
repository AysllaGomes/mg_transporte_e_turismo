export interface MenuItem {

    titulo: string;
    url: string;
    descricao: string;
    query?: {};
    papel?: string;
    status?: string;
    class?: string;
    chave?: string;
    descricaoLonga?: string;
    items?: MenuItem[];

}
