import { MatSnackBar } from '@angular/material/snack-bar';
import { EventEmitter, Injectable, Injector } from '@angular/core';

@Injectable()
export class NotificationService {

    notifier = new EventEmitter<string>();

    constructor(
        protected injector: Injector
    ) {}

    notify(message: string, duration?: number) {
        this.injector.get(MatSnackBar).open(message, 'OK', {
            duration: duration ? duration : 7000,
        });
        this.notifier.emit(message);
    }

}
