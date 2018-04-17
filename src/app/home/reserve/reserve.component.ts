import {Component, ViewChild, OnInit} from '@angular/core';
import {LoginComponent} from '../login-dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {PayComponent} from './pay-dialog.component';

@Component({
<<<<<<< HEAD:src/app/home/bookRoom/bookRoom.component.ts
  templateUrl: `bookRoom.component.html`,
  styleUrls: ['bookRoom.component.css']
=======
    templateUrl: `reserve.component.html`,
    styleUrls: ['reserve.component.css']
>>>>>>> develop:src/app/home/reserve/reserve.component.ts
})

export class ReserveComponent implements OnInit {

<<<<<<< HEAD:src/app/home/bookRoom/bookRoom.component.ts
  static URL = 'bookRoom';
=======
    static URL = 'reserve';
>>>>>>> develop:src/app/home/reserve/reserve.component.ts

  constructor(public payDialog: MatDialog, private router: Router) {
  }

  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm',
    defaultOpen: false
  };

  ngOnInit(): void {
  }

  login(): void {
    const dialogRef = this.payDialog.open(PayComponent);
  }
}

