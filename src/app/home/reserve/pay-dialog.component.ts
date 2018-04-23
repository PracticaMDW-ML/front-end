import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: 'pay-dialog.component.html',
  styleUrls: ['pay-dialog.component.css']
})

export class PayComponent {

  email: string;
  password: string;
  passwordFormControl: FormControl;
  emailFormControl: FormControl;

  payPalForm: FormGroup = new FormGroup({
    usuario: this.emailFormControl = new FormControl('', [Validators.required]),
    password: this.passwordFormControl = new FormControl('', [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<PayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}
