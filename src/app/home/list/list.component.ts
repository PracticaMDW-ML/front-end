import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login-dialog.component';
import { HomeComponent } from '../home.component';
import { ReserveComponent } from '../reserve/reserve.component';

@Component({
  selector: 'app-list',
  templateUrl: `list.component.html`,
  styleUrls: ['list.component.css']
})

export class ListComponent implements OnDestroy {

  static URL = 'list';

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

  ngOnDestroy(): void {
    // Cerrar todas las subscripciones
  }
}
