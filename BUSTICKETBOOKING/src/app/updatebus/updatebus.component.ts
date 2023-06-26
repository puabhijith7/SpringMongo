import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../model/bus';
import { Schedule } from '../schedule';
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
	bus:Bus[]=[]
	dropdownValues: number[]=[];
	isDropdownSelected: boolean = false;
  
  constructor(private service:ServiceService,private router: Router) {
	this.getDropdownValues();
   }
   onDropdownChange() {
	// Check if a value is selected
	if(!this.isDropdownSelected)
	{
		for(let i=0;i<this.bus.length;i++)
		{
			if(this.busId==this.bus[i].busId)
			{
				this.busName=this.bus[i].busName
				this.busNo=this.bus[i].busNo
				this.busType=this.bus[i].busType
				this.regNo=this.bus[i].regNo
				this.totalSeats=this.bus[i].totalSeats
				this.engineNo=this.bus[i].engineNo
			}
		}
	 
	}
  }
   getDropdownValues(): void {
    this.service.getDropdownValuesbus().subscribe(
		
		(response: any) => {
		if (Array.isArray(response)) {
			this.bus=response as Bus[]	
			for(let i=0;i<this.bus.length;i++)
			{
				this.dropdownValues[i]=this.bus[i].busId
			}
		 
      }
	  else {
		console.log("Invalid response format");
	  }
	},
      (error: any) => {
        console.log('Error fetching dropdown values:', error);
      }
    );}
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
