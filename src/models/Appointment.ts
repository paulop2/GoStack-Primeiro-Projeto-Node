import { v4 as uuid } from 'uuid'
class Appointment {
  id: String;

  provider: String;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
