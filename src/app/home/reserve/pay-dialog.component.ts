import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  templateUrl: 'pay-dialog.component.html',
  styleUrls: ['pay-dialog.component.css']
})

export class PayComponent {

  constructor(
    public dialogRef: MatDialogRef<PayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}
