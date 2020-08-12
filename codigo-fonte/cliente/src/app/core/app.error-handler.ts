import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

import { NotificationService } from './service/notification.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(
        protected injector: Injector
    ) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        const ns = this.injector.get(NotificationService);
        if (errorResponse instanceof HttpErrorResponse) {
            switch (errorResponse.status) {
                case 400:
                case 406:
                    if (errorResponse.error && errorResponse.error.message) {
                        ns.notify(errorResponse.error.message);
                    } else {
                        ns.notify('Ocorreu um erro inesperado.');
                    }
                    break;
                case 401:
                    ns.notify('Não autenticado, faça login novamente para continuar.');
                    break;
                case 403:
                    ns.notify('Não autorizado.');
                    break;
                case 404:
                    ns.notify('Recurso não encontrado. Verifique o console para mais detalhes');
                    break;
                case 422:
                    ns.notify('Erro');
                    break;
                case 500:
                    ns.notify('Ocorreu um erro no servidor.');
                    break;
            }
        } else {
            ns.notify('Ocorreu um erro inesperado.');
        }
        super.handleError(errorResponse);
    }
}
