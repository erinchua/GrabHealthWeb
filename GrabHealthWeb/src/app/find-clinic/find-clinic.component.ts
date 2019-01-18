import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PatientService } from '../services/patient.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-find-clinic',
  templateUrl: './find-clinic.component.html',
  styleUrls: ['./find-clinic.component.scss']
})
export class FindClinicComponent implements OnInit {

  clinic: any;
  clinics: Array<any>;

  today: number = Date.now();

  sessions = [
    { name: "Session 1", value: "0900 - 1300" },
    { name: "Session 2", value: "1400 - 1800" }
  ];

  constructor(private router : Router, private patientService : PatientService, private flashMessagesService : FlashMessagesService) {
   }

  ngOnInit() {
    this.getClinics();
  }

  getClinics(){
    this.patientService.getClinics().subscribe(
      res=> {
        this.clinics = res['clinics'];
      }, 
      err=> {
        console.log(err);
      });
  }

  viewBookingDetails(clinic){
    this.clinic = clinic;
  }

  onBooking(){
    var flashMessagesService = this.flashMessagesService;
    
    this.patientService.bookClinics(this.clinic).subscribe(
      res => {
        console.log(res);
        if (res['success']){
          flashMessagesService.show('Successfully booked!', { cssClass: 'alert-success', timeout: 3000});
        } else {
          flashMessagesService.show('You have already made a booking!', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, 
      err => {
        console.log(err);
      });
  }

}
