import { Injectable } from '@angular/core';
import { Reserva } from './reserva.model';
import { HttpService } from '../../core/http.service';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ReservaService {
    static END_POINT = '/habitaciones';

    constructor(private httpService: HttpService, private snackBar: MatSnackBar) {
    }

    /*create(reserva: Reserva): Observable<any> {
        // authToken para cuando se haga login
        //return this.httpService.authToken().pdf().post(ReservaService.END_POINT, reserva);

        return this.httpService.post(ReservaService.END_POINT, reserva).map(
            data => {
                this.successful();
               // return data;
            }
        );
    }*/

    create(reserva: Reserva): Observable<boolean> {
        // authToken para cuando se haga login
        //return this.httpService.authToken().post(UserService.END_POINT, user).map(
            
        return this.httpService.post(ReservaService.END_POINT, reserva).map(
            data => {
                this.successful();
                return data;
            }
        );
    }

    readAll(): Observable<Reserva[]> {
        //return this.httpService.authToken().get(VoucherService.END_POINT);

        return this.httpService.get(ReservaService.END_POINT);
    }

    private successful() {
        this.snackBar.open('La reserva se ha realizado correctamente', '', {
            duration: 2000
        });
    }
}
