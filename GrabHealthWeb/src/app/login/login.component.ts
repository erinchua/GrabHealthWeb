import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('email'),
    password: new FormControl('password')
  });

  // enterDetailsForm = new FormGroup({
  //   nric: new FormControl('nric'),
  //   contactNo: new FormControl('contactNo')
  // })
  
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private patientService : PatientService) { 
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // this.enterDetailsForm = this.formBuilder.group({
    //   nric: ['', Validators.required],
    //   contactNo: ['', Validators.required]
    // });
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

  forgetPassword(){

  }

  ngOnInit() {
    this.scriptAdd();
    window['onloadCallback'] = this.onloadCallback.bind(this);
  }

  scriptAdd(){
    let script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  onloadCallback = function(){
      grecaptcha.render('recaptcha', {
        'sitekey': '6Ld1WYwUAAAAACPeGjQLNDvfxo0dUHjNx3GMBn4T' 
      });
    
  }

  // verifyCallback(response){
  //   alert(response);
  // }


}
