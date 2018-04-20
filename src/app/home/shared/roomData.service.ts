import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Room } from './room.model';
import { RoomType } from './roomType.model';

@Injectable()
export class RoomDataService {

  private roomSource = new BehaviorSubject<Room>({ imagen: "http://4.bp.blogspot.com/-RSAdi3NMMs8/VakWj_znRcI/AAAAAAAAAMI/lp19iktRyCw/s1600/Rent%2Broom%2Bstockholm.jpg" });
  currentRoom = this.roomSource.asObservable();

  constructor() { }

  changeRoom(room: Room) {
    this.roomSource.next(room);
  }

}