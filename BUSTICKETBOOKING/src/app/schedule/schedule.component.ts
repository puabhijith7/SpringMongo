import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../model/schedule';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
    scheduleId!: number
    date!: Date
    departureTime!: string
    arrivalTime!: string
    routeId!: number
    busId!: number
    constructor(private service:ServiceService,private router: Router) { }
addschedule(){
  const schedule = new Schedule(this.scheduleId,this.date,this.departureTime,this.arrivalTime,this.routeId,this.busId)
   
    this.service.addSchedule(schedule).subscribe(
      response => {
        console.log(response);
       
        // this.router.navigate(['/adminhomepage']);
      }
      );
     
    }
 

}
