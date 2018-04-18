// Fix later when room is updated
import { Habitacion } from './room.model';
import {Usuario} from './usuario.model';

export interface Reserva {
    fechaEntrada: Date;
    fechaSalida: Date;
    precio: number;
    abonada: boolean;
    usuario?: Usuario;
    habitacion?: Habitacion;
}
