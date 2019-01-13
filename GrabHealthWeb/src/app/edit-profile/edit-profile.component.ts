import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

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
