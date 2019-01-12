import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  patient:Object;

  constructor(private router : Router, private patientService : PatientService) { }

  ngOnInit() {
    this.patientService.getPatientDetails().subscribe(
      res => {
        this.patient = res['patient'];
      },
      err => {
        console.log(err);
        return false;
    });
  } 

}
