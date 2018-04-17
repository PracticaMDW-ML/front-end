import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ReserveComponent } from './reserve/reserve.component';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login-dialog.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: `home.component.html`,
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnDestroy {

  static URL = 'home';

  reserve: boolean;

  constructor(public loginDialog: MatDialog, private router: Router) {
  }

 login(): void {
  const dialogRef = this.loginDialog.open(LoginComponent, {
    width: '250px'
   });
  }

  book() {
    this.router.navigate([HomeComponent.URL, ReserveComponent.URL]);
  }

  inicio() {
    this.router.navigate([HomeComponent.URL, ListComponent.URL]);
  }

  ngOnDestroy(): void {
    // Cerrar todas las subscripciones
  }
}
