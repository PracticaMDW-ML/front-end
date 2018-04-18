import { RoomType } from './roomType.model';

export interface Room {
  servicios: [String];
  precioHora: number;
  imagen: string;
  tipoHabitacion?: RoomType;
}
