import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  patient:Object;

  constructor(private router : Router, private patientService : PatientService, private flashMessagesService : FlashMessagesService) { }

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


  onSaved(){
    var flashMessagesService = this.flashMessagesService;

    this.patientService.editPatientDetails(this.patient).subscribe(
      res => {
        console.log(res);
        if(res['success']) {
          this.patientService.getPatientDetails();
          flashMessagesService.show('Profile have been successfully updated', { cssClass: 'alert-success', timeout: 3000});
        } else {
          flashMessagesService.show('Error', { cssClass: 'alert-danger', timeout: 3000});
        }
      },
      err => {
        console.log(err);
      });
  }


}
