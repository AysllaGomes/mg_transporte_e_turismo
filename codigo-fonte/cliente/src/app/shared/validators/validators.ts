import { cpf } from './cpf/validator';
import { cnpj } from './cnpj/validator';
import { email } from './email/validator';
import { unique } from './unique/validator';
import { confirm } from './confirm/validator';
import { password } from './password/validator';
import { fileFormat } from './file-format/validator';
import { maxBinarySize } from './max-binary-size/validator';

export const SharedValidators: any = {
    cpf,
    cnpj,
    email,
    unique,
    confirm,
    password,
    fileFormat,
    maxBinarySize
};
