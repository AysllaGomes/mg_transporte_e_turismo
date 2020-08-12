import { TabelaDeDominio } from './tabela-de-dominio';

export interface User {
    id?;
    usuario;
    nome;
    email;
    cpf;
    telefone?;
    papeis?: TabelaDeDominio[];
    picture?;
}
