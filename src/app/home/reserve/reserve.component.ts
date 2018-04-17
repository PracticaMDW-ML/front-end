import {Component, ViewChild, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {PayComponent} from './pay-dialog.component';

@Component({
  templateUrl: `reserve.component.html`,
  styleUrls: ['reserve.component.css']
})

export class ReserveComponent implements OnInit {

  static URL = 'reserve';

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(public payDialog: MatDialog, private router: Router) {
  }
  ngOnInit(): void {
  }

  login(): void {
    const dialogRef = this.payDialog.open(PayComponent);
  }
}

