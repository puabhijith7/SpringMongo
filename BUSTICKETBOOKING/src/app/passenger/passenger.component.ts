import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../service.service';
import { PassengerDto, RequestDto } from '../request-dto';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent {
  email:string[]=[]
  mobileNo:string[]=[]
  name:string[]=[]
  gender:string[]=[]
  age:number[]=[]
  passengers: number[] = [];
  nameErrors: string[] = [];

  ageErrors: string[] = [];

  genderErrors: string[] = [];

  mobileErrors: string[] = [];

  emailErrors: string[] = [];

  passengerDto: PassengerDto[] = [];
  requestDto:RequestDto[]=[]
  fhault: string =this.demosearch.fhault;
  thault: string =this.demosearch.thault;
  fare: number = this.demosearch.fare;
  date: string = this.demosearch.date;

  numofseats: Array<number>=this.demosearch.numofseats;
  bookingId: number=0;
  

  constructor(private demosearch:ServiceService,private router:Router) {

    this.passengers =Array( this.numofseats.length);

  }

  submitForm() {

    this.clearErrors();

    for (let i = 0; i < this.numofseats.length; i++) {

      if (!this.name[i]) {

        this.nameErrors[i] = 'Please enter a name';

        return;

      }

      // Check if Age field is empty or not a number

      else if (!this.age[i] || isNaN(this.age[i])) {

        this.ageErrors[i] = 'Please enter a valid age';

        return;

      }

      // Check if Gender field is empty

      else if (!this.gender[i]) {

        this.genderErrors[i] = 'Please select a gender';

        return;

      }

      // Check if Mobile field is empty or invalid format

      else if (!this.mobileNo[i] || !/^(\+\d{1,3}[- ]?)?\d{10}$/.test(this.mobileNo[i])) {

        this.mobileErrors[i] = 'Please enter a valid mobile number';

        return;

      }

      // Check if Email field is empty or invalid format

      else if (!this.email[i] || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email[i])) {

        this.emailErrors[i] = 'Please enter a valid email address';

        return;

      }
      else {
        this.router.navigate(['/ticket']);
      }

      const passengerDto = new PassengerDto(this.name[i],this.email[i],this.mobileNo[i],this.age[i],this.gender[i])

       this.passengerDto.push(passengerDto);
       console.log(this.passengerDto)

    }

    // const requestDto=new RequestDto(this.fhault,this.thault,this.demosearch.scheduleId,2,this.numofseats.length,this.fare,this.date,this.numofseats,this.passengerDto)

    // this.requestDto.push(requestDto);

    // console.log(this.requestDto);




  }

  clearErrors() {

    this.nameErrors = [];

    this.ageErrors = [];

    this.genderErrors = [];

    this.mobileErrors = [];

    this.emailErrors = [];

  }

}