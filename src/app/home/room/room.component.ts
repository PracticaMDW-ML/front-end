import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home.component';
import { ReserveComponent } from '../reserve/reserve.component';
import { RoomService } from '../shared/room.service';
import { Room } from '../shared/room.model';

@Component({
  templateUrl: 'room.component.html',
  styleUrls: ['room.component.css']
})

export class RoomComponent implements OnDestroy {

  static URL = 'room';
  reserve: boolean;

  data: Room[];

  constructor(private router: Router, private roomService: RoomService) {
    this.synchronize();
  }

  synchronize() {
    this.roomService.readAll().subscribe(data => this.data = data);
  }

  reservate(room: Room) {
    this.router.navigate(['home/reservas', room._id]);
  }

  ngOnDestroy(): void {
  }
}
