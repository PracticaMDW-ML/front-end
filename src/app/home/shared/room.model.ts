//import { Services } from './typeRoom.model';

export interface Habitacion {
  servicios?: string;
  mobile: number;
  username: string;
  email?: string;
  dni?: string;
  address?: string;
  registrationDate?: Date;
  active?: boolean;
  password?: string;
  role?: string[];
}
