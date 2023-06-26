import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../model/bus';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-updatebus',
  templateUrl: './updatebus.component.html',
  styleUrls: ['./updatebus.component.css']
})
export class UpdatebusComponent {
    busId!:number;
	busNo!:number;
	regNo:string='';
	engineNo:string='';
	busType:string='';
	busName:string='';
	totalSeats!:number;
  
  constructor(private service:ServiceService,private router: Router) { }
updatebus(){
  const bus = new Bus(this.busId,this.busNo,this.regNo,this.engineNo,this.busType,this.busName,this.totalSeats)
   
    this.service.updateBus(bus).subscribe(
      response => {
        console.log(response);
        console.log("bus updated")
        this.router.navigate(['/adminhomepage']);
      }
      );
      alert("Bus Updated")
    }

}
