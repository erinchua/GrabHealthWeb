import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.scss']
})
export class BookingStatusComponent implements OnInit {

  constructor(private router : Router, private patientService : PatientService) { }

  appointments:Array<any>;

  ngOnInit() {
    this.getBookedClinics();
  }

  getBookedClinics(){
    this.patientService.getBookedClinics().subscribe(
      res=> {
        this.appointments = res['appointments'];
      }, 
      err=> {
        console.log(err);
      });
  } 

  onCancel(){
    
  }

}
