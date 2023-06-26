import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './model/bus';
import { Schedule } from './model/schedule';
import { User } from './model/user';
import { Seat } from './seat';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  

 
  deleteUrl!:string
  addbusUrl!:string;
  updateUrl!:string;
  addscheduleUrl: string;


  s:Seat[]=[];
  fare: number=0;
  date: string='';
  seat: Seat[]=[];
  fhault: string='';
  thault: string='';
  numofseats: Array<number>=[];
  scheduleId: number=0;
 

  constructor(private http:HttpClient) {
   
    this.addbusUrl="http://localhost:8081/api/v1/buses/bus";
    this.updateUrl="http://localhost:8081/api/v1/buses/bus";
    this.addscheduleUrl="http://localhost:8082/api/v1/schedules/schedule/post"
   }
   getDropdownValuesbus(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8081/api/v1/buses/bus');
  }
    
    getDropdownValues(): Observable<string[]> {
      return this.http.get<string[]>('http://localhost:8081/api/v1/buses/routeDetails/all');
    }
    
    search(date: string, source: string, dest: string): Observable<any> {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/${date}/${source}/${dest}`);
    }
    
    searchbus(date: string, source: string, dest: string): Observable<any> {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/bus/${date}/${source}/${dest}`);
    }
    
    getfare(date: string, source: string, dest: string): Observable<any> {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/fare/${date}/${source}/${dest}`);
    }
    getseats(s: number): Observable<any> {
      return this.http.get(`http://localhost:8082/api/v1/schedules/seat/${s}`);
  }
  addbusok(bus:Bus):Observable<any>{
    return this.http.post(this.addbusUrl,bus);
  }
  updateBus(bus: Bus) {
    return this.http.put(this.updateUrl,bus);
  }
  addSchedule(schedule: Schedule) {
    return this.http.post(this.addscheduleUrl,schedule);
  }


  }
