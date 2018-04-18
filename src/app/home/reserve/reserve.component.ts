import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {PayComponent} from './pay-dialog.component';
import {Reserve} from '../shared/reserve.model';
import {ReserveService} from '../shared/reserve.service';

@Component({
  templateUrl: 'reserve.component.html',
  styleUrls: ['reserve.component.css']
})

export class ReserveComponent implements OnInit {

  static URL = 'reservas';
  reservas: Reserve[];
  reserva: Reserve;

  dateEntrada: Date = new Date();
  dateSalida: Date = new Date();
  settings = {
    bigBanner: true, timePicker: true, format: 'dd-MM-yyyy hh:mm', defaultOpen: false
  };


  constructor(public payDialog: MatDialog, private router: Router, private reserveService: ReserveService) {
  }

  ngOnInit(): void {
    this.synchronize();
  }

  synchronize() {
    this.reserveService.readAll().subscribe(data => {
      this.reservas = data;
    });
  }

  create(): void {
    this.reserva = {fechaEntrada: this.dateEntrada, fechaSalida: this.dateSalida, precio: 0, abonada: false};
    this.reserveService.create(this.reserva).subscribe(

    );
  }

  login(): void {
    const dialogRef = this.payDialog.open(PayComponent);
  }


}

