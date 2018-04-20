import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PayComponent } from './pay-dialog.component';
import { Reserve } from '../shared/reserve.model';
import { ReserveService } from '../shared/reserve.service';
import { RoomDataService } from '../shared/roomData.service';
import { Room } from '../shared/room.model';

@Component({
  templateUrl: 'reserve.component.html',
  styleUrls: ['reserve.component.css']
})

export class ReserveComponent implements OnInit {

  static URL = 'reservas';
  reservas: Reserve[];
  reserva: Reserve;
  title = 'Reservas existentes';
  columns = ['fechaEntrada', 'fechaSalida', 'precio'];
  dateEntrada: Date = new Date();
  dateSalida: Date = new Date();
  settings = {
    bigBanner: true, timePicker: true, format: 'dd-MM-yyyy hh:mm', defaultOpen: false
  };

  room: Room;


  constructor(public payDialog: MatDialog, private reserveService: ReserveService, private roomDataService: RoomDataService) {
    this.roomDataService.currentRoom.subscribe(message => this.room = message);
  }

  ngOnInit(): void {
    this.synchronize();
  }

  synchronize() {
    this.reserveService.readAll().subscribe(data => {
      this.reservasHabitacion( data );
    });
  }

  reservasHabitacion( data: Reserve[] ) {
    this.reservas = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].habitacion.imagen === this.room.imagen) {
        this.reservas.push(data[i]);
      }
    }
  }

  create(): void {
    this.reserva = { fechaEntrada: this.dateEntrada, fechaSalida: this.dateSalida, precio: 0, abonada: false };
    this.reserveService.create(this.reserva).subscribe(

    );
  }

  login(): void {
    const dialogRef = this.payDialog.open(PayComponent);
  }


}

