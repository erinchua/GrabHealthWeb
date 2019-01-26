import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PatientService } from '../services/patient.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.scss']
})
export class BookingStatusComponent implements OnInit {

  constructor(private router : Router, private patientService : PatientService, private flashMessagesService : FlashMessagesService) { }

  appointments:Array<any>;
  patients:Array<any>;

  ngOnInit() {
    this.getBookedClinics();
  }

  getBookedClinics(){
    this.patientService.getBookedClinics().subscribe(
      res=> {
        this.appointments = res['appointments'];
        this.patients = res['patients'];
      }, 
      err=> {
        console.log(err);
      });
      
  } 

  onCancel(){
    var flashMessagesService = this.flashMessagesService;
    
    this.patientService.cancelBookings(this.appointments).subscribe(
      res => {
        console.log(res);
        if (res['success']){
          flashMessagesService.show('Appointment has been successfully cancelled!', { cssClass: 'alert-success', timeout: 3000});
          this.getBookedClinics();
        } else {
          flashMessagesService.show('Sorry cancellation failed!', { cssClass: 'alert-danger', timeout: 3000 });
          this.getBookedClinics();
        }
      }, 
      err => {
        console.log(err);
      });
  }

}
