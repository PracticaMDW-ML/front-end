import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { PayComponent } from './pay-dialog.component';
import { Reserve } from '../shared/reserve.model';
import { ReserveService } from '../shared/reserve.service';
import { RoomDataService } from '../shared/roomData.service';
import { Room } from '../shared/room.model';
import { User } from '../shared/user.model';

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
  dateEntrada: Date;
  dateSalida: Date;
  settings = {
    bigBanner: true, timePicker: true, format: 'dd-MM-yyyy hh:mm', defaultOpen: false
  };

  hours = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 7},
    {value: 8},
    {value: 9},
    {value: 10},
    {value: 11},
    {value: 12},
  ];
  totalHoras: number;

  room: Room;
  usuario: User;

  constructor(public payDialog: MatDialog,  private snackBar: MatSnackBar,
    private reserveService: ReserveService, private roomDataService: RoomDataService) {
    this.dateEntrada = new Date();
    this.totalHoras = 1;
    this.usuario = { usuario: 'pepito', password : '2', email: 'safsdf@gmail.com' };
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

    console.log( data );

    for (let i = 0; i < data.length; i++) {
      if (data[i].habitacion.imagen === this.room.imagen) {
        this.reservas.push(data[i]);
      }
    }
  }

  create(reserva: Reserve): void {
    this.reserveService.create(this.reserva).subscribe();
  }

  confirmarReserva(): void {
    this.dateSalida = new Date(this.dateEntrada);
    if ((this.dateSalida.getHours() + this.totalHoras) <= 24) {
      this.dateSalida.setHours(this.dateSalida.getHours() + this.totalHoras);
    } else {
      this.dateSalida.setDate(this.dateSalida.getDate() + 1);
      const hDiaAnterior = 24 - this.dateSalida.getHours();
      const hDiaSiguiente = this.totalHoras - hDiaAnterior;
      this.dateSalida.setHours(hDiaSiguiente);
    }
    this.reserva = {
      fechaEntrada: this.dateEntrada,
      fechaSalida: this.dateSalida,
      precio: this.room.precioHora * this.totalHoras,
      abonada: false,
      habitacion: this.room,
      usuario: this.usuario,
    };

    console.log(this.reserva);
    if (this.validate(this.reserva)) {
       this.create(this.reserva);
      const dialogRef = this.payDialog.open(PayComponent);
    } else {
      this.snackBar.open('La habitación no está disponible en esa fecha. Consulte las reservas de la habitación en el listado.', '', {
        duration: 4000
      });
    }
  }

  validate(reserva: Reserve): boolean {

    for (let i = 0; i < this.reservas.length; i++) {
      const fechaEntradaReservas  = new Date(Date.parse(this.reservas[i].fechaEntrada.toString()));
      const fechaSalidaReservas  = new Date(Date.parse(this.reservas[i].fechaSalida.toString()));
      const fechaEntradaReserva = new Date(this.reserva.fechaEntrada);
      const fechaSalidaReserva = new Date(this.reserva.fechaSalida);

      if ( fechaEntradaReserva >= fechaEntradaReservas && fechaEntradaReserva < fechaSalidaReservas ){
        return false;
      }

      if ( fechaEntradaReserva < fechaEntradaReservas && fechaSalidaReserva > fechaEntradaReservas ){
        return false;
      }

    }
    return true;
  }


}

