import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: `home.component.html`,
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnDestroy {

  static URL = 'home';

  constructor(public loginDialog: MatDialog) {
  }

  /* EJEMPLO PARA ENRUTAR
  tickets() {
    this.router.navigate([HomeComponent.URL, TicketsComponent.URL]);
  }
  */

  ngOnDestroy(): void {
    // Cerrar todas las subscripciones
  }

  login(): void {
    const dialogRef = this.loginDialog.open(LoginComponent, {
      width: '250px'
    });
  }
}
