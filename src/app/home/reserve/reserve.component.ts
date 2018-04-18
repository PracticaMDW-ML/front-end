import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PayComponent } from './pay-dialog.component';

import { Reserva } from '../shared/reserva.model';
import { ReservaService } from '../shared/reserva.service';

@Component({
  templateUrl: `reserve.component.html`,
  styleUrls: ['reserve.component.css']
})

export class ReserveComponent implements OnInit {

  static URL = 'reservas';

  reservas: Reserva[];
  reserva: Reserva;

  dateEntrada: Date = new Date();
  dateSalida: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm',
    defaultOpen: false
  };



  constructor(public payDialog: MatDialog, private router: Router, private reservaService: ReservaService) {
  }

  ngOnInit(): void {
    this.synchronize();
  }

  synchronize() {
    this.reservaService.readAll().subscribe(
      data => {
        this.reservas = data;
      }
    );
  }

  create(): void {
    this.reserva = { fechaEntrada: this.dateEntrada, fechaSalida: this.dateSalida, precio: 0, abonada: false };
    this.reservaService.create(this.reserva).subscribe(

    );
  }

  login(): void {
    const dialogRef = this.payDialog.open(PayComponent);
  }




}

