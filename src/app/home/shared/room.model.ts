import { Services } from './typeRoom.model';

export interface User {
  servicios
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
