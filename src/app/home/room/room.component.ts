import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {HomeComponent} from '../home.component';
import {ReserveComponent} from '../reserve/reserve.component';

@Component({
  templateUrl: `room.component.html`,
  styleUrls: ['room.component.css']
})

export class RoomComponent implements OnDestroy {

  static URL = 'room';
  reserve: boolean;

  constructor(private router: Router) {
  }

  state() {
    this.router.navigate([HomeComponent.URL, ReserveComponent.URL]);
  }

  ngOnDestroy(): void {
  }
}
