import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { WindowService } from '../services/window.service';
import * as firebase from 'firebase';
import { PhoneNumber } from '../phone-number';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  patient: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private patientService : PatientService, private windowService : WindowService) { 
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){

    this.submitted = true;

    if (this.loginForm.invalid){
      return;
    }

    this.patientService.authenticatePatient(this.loginForm.value).subscribe(
      res => {
        if(res['success']) {
          this.patientService.storePatientData(res['token'], res['patient']);
          this.router.navigateByUrl('profile');
        }
      },
      err => {
        console.log(err);
        this.router.navigateByUrl('login');
      } 
    )

    this.success = true;
  }

  ngOnInit() {
    this.windowRef = this.windowService.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }

  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.patient = result.patient;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }

}
