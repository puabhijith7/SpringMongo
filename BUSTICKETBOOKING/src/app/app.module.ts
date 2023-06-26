import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
// import { DeletebusComponent } from './deletebus/deletebus.component';
import { FormsModule } from '@angular/forms';

import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { MainhomepageComponent } from './mainhomepage/mainhomepage.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { UpdatescheduleComponent } from './updateschedule/updateschedule.component';
// import { DeletescheduleComponent } from './deleteschedule/deleteschedule.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BusComponent } from './bus/bus.component';
import { ShowscheduleComponent } from './showschedule/showschedule.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Nav1Component } from './nav1/nav1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollimageComponent } from './scrollimage/scrollimage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { NavbarmainComponent } from './navbarmain/navbarmain.component';
import { UserseachComponent } from './userseach/userseach.component';
import { BusseatComponent } from './busseat/busseat.component';
import { BookticketpageComponent } from './bookticketpage/bookticketpage.component';
import { NavloginsignupComponent } from './navloginsignup/navloginsignup.component';
import { CardComponent } from './card/card.component';
import { AftreloginsearchComponent } from './aftreloginsearch/aftreloginsearch.component';
import { Seatavailability1Component } from './seatavailability1/seatavailability1.component';
import { SeatsComponent } from './seats/seats.component';
import { PassengerComponent } from './passenger/passenger.component';
import { TicketComponent } from './ticket/ticket.component';
import { BuslistComponent } from './buslist/buslist.component';




@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // SignupComponent,
    HomeComponent,
    DashboardComponent,
    SearchpageComponent,
    SeatavailabilityComponent,
    PassengerdetailsComponent,
    AdminhomepageComponent,
    AddbusComponent,
    UpdatebusComponent,
    // DeletebusComponent,
    MainhomepageComponent,
    AddscheduleComponent,
    UpdatescheduleComponent,
    // DeletescheduleComponent,
    ScheduleComponent,
    BusComponent,
    ShowscheduleComponent,
    FooterComponent,
    AboutusComponent,
    Nav1Component,
    ScrollimageComponent,
    AdminpageComponent,
    NavbarmainComponent,
    UserseachComponent,
    BusseatComponent,
    BookticketpageComponent,
    NavloginsignupComponent,
    CardComponent,
    AftreloginsearchComponent,
    Seatavailability1Component,
    SeatsComponent,
    PassengerComponent,
    TicketComponent,
    BuslistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
   
    
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
