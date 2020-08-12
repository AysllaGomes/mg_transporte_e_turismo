import { Credential } from '../model/credential.model';
import { ExtrasTokenPayload } from '../model/extras-token-payload.model';

export interface TokenPayload {

    username: string;
    iat: number;
    exp: number;

    credential: Credential;

    roles: string[];

    extras: ExtrasTokenPayload;

}
