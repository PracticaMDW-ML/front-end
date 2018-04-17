import {Component, ViewChild, OnInit} from '@angular/core';
import {LoginComponent} from '../login-dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {PayComponent} from './pay-dialog.component';

@Component({
    templateUrl: `reserve.component.html`,
    styleUrls: ['reserve.component.css']
})

export class ReserveComponent implements OnInit {

    static URL = 'reserve';

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

