import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.scss']
})
export class BookingStatusComponent implements OnInit {

  clinic: any;
  clinics: Array<any>;

  constructor(private router : Router, private patientService : PatientService) { }

  ngOnInit() {
    this.getBookedClinics();
  }

  getBookedClinics(){
    this.patientService.getBookedClinics().subscribe(
      res => {
        this.clinics=res['clinics'];
      },
      err => {
        console.log(err);
    });
  }
}
