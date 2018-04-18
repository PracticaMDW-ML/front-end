import {HttpService} from '../../core/http.service';
import {MatSnackBar} from '@angular/material';
import {Room} from './room.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RoomService {

  static END_POINT = '/habitaciones';

  constructor(private httpService: HttpService, public snackBar: MatSnackBar) {
  }

  readAll(): Observable<Room[]> {
    return this.httpService.get(RoomService.END_POINT);
  }
}
