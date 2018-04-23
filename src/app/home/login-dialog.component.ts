import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "./shared/login.service";

@Component({
  selector: 'app-dialog-login',
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['login-dialog.component.css']
})

export class LoginComponent {

  usuario: string;
  password: string;
  passwordFormControl: FormControl;
  userFormControl: FormControl;

  loginForm: FormGroup = new FormGroup({
    usuario: this.userFormControl = new FormControl('', [Validators.required]),
    password: this.passwordFormControl = new FormControl('', [Validators.required])
  });

  constructor(private snackBar: MatSnackBar, public dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private loginService: LoginService) {
  }

  login() {
    this.loginService.login(this.usuario, this.password).subscribe(
      exito => {
        if (exito) {
        // redirigir a reservar
        } else {
          this.showErrorAuthentication();
        }
      },
      error => this.showErrorAuthentication(),
    );
  }

  showErrorAuthentication(): void {
    this.snackBar.open("Autenticacion fallida", 'Error', {
      duration: 8000
    });
  }
}
