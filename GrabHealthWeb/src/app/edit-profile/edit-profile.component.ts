import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  changePasswordForm = new FormGroup({
    password: new FormControl('password')
  });

  patient:Object;

  constructor(private router : Router, private patientService : PatientService, private flashMessagesService : FlashMessagesService, private formBuilder: FormBuilder) {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, 
                                      CustomValidators.patternValidator(/\d/, { hasNumber: true }),
                                      CustomValidators.patternValidator(/[A-Z]/, { hasUpperCase: true }),
                                      CustomValidators.patternValidator(/[a-z]/, { hasLowerCase: true }),
                                      CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true }),
                                      Validators.minLength(8)])],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: CustomValidators.passwordMatchValidator
    });
  }

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

  submitted = false;
  success = false;

  changePassword(){

    this.submitted = true;

    var flashMessagesService = this.flashMessagesService;

    if(this.changePasswordForm.invalid){
      return;
    }
    
    this.patientService.changePassword(this.changePasswordForm.value).subscribe(
      res => {
        console.log(res);
        if (res['success']){
          flashMessagesService.show('Password is changed', { cssClass: 'alert-success', timeout: 3000});
        } else {
          flashMessagesService.show('Failed to change password', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, 
      err => {
        console.log(err);
      });

      this.success = true;
  }


}
