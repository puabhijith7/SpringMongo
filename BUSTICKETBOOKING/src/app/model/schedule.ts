export class Schedule {
  scheduleId: number;
  date: Date;
  departureTime: string;
  arrivalTime: string;
  routeId: number;
  busId: number;

  constructor(
    scheduleId: number,
    date: Date,
    departureTime: string,
    arrivalTime: string,
    routeId: number,
    busId: number
  ) {
    this.scheduleId = scheduleId;
    this.date = date;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.routeId = routeId;
    this.busId = busId;
  }
}

