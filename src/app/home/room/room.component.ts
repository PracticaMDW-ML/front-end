import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {HomeComponent} from '../home.component';
import {ReserveComponent} from '../reserve/reserve.component';
import {RoomService} from '../shared/room.service';
import {Room} from '../shared/room.model';
import {RoomDataService} from '../shared/roomData.service';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login-dialog.component';

@Component({
  templateUrl: 'room.component.html',
  styleUrls: ['room.component.css']
})

export class RoomComponent implements OnDestroy {

  static URL = 'room';
  data: Room[];

  constructor(private router: Router, private roomService: RoomService, private roomDataService: RoomDataService, public loginDialog: MatDialog) {
    this.synchronize();
  }

  synchronize() {
    this.roomService.readAll().subscribe(data => this.data = data);
  }

  reservate(room: Room) {
    const token: string = localStorage.getItem('tokenHPH');
    if (token) {
      this.roomDataService.changeRoom(room);
      this.router.navigate([HomeComponent.URL, ReserveComponent.URL]);
    } else {
      const dialogRef = this.loginDialog.open(LoginComponent, {
        width: '250px'
      });
    }
  }

  ngOnDestroy(): void {
  }
}
