import { Injectable } from '@angular/core';
import { Reserve } from './reserve.model';
import { HttpService } from '../../core/http.service';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ReserveService {
  static END_POINT = '/reservas';

  constructor(private httpService: HttpService, private snackBar: MatSnackBar) {
  }

  create(reserve: Reserve): Observable<void> {
    // authToken para cuando se haga login
    //return this.httpService.authToken().post(UserService.END_POINT, user).map(

    return this.httpService.post(ReserveService.END_POINT, reserve).map(data => {
      return data;
    });
  }

  readAll(): Observable<Reserve[]> {
    return this.httpService.get(ReserveService.END_POINT);
  }

}
