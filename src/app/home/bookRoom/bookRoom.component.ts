import {Component, ViewChild, OnInit} from '@angular/core';
import {LoginComponent} from '../login-dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {PayComponent} from './pay-dialog.component';

@Component({
  templateUrl: `bookRoom.component.html`,
  styleUrls: ['bookRoom.component.css']
})

export class BookRoomComponent implements OnInit {

  static URL = 'bookRoom';

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

