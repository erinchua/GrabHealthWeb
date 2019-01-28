import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('email'),
    password: new FormControl('password'),
  });

  changeForm = new FormGroup({
    email: new FormControl('email'),
    contactNo: new FormControl('contactNo')
  });
  
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private patientService : PatientService, private flashMessagesService : FlashMessagesService) { 
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.changeForm = this.formBuilder.group({
      email: ['', Validators.required],
      contactNo: ['', Validators.required]
    });

  }

  onSubmit(){
    this.submitted = true;

    var flashMessagesService = this.flashMessagesService;

    if (this.loginForm.invalid){
      return;
    }

    this.patientService.authenticatePatient(this.loginForm.value).subscribe(
      res => {
        if(res['success']) {
          flashMessagesService.show('Successfully login', { cssClass: 'alert-success', timeout: 3000});
          this.patientService.storePatientData(res['token'], res['patient']);
          this.router.navigateByUrl('profile');
        } else {
          flashMessagesService.show('Wrong email or password', { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigateByUrl('login');
        }
      },
      err => {
        console.log(err);
      } 
    )

    this.success = true;

  }

  forgetPassword(){
    this.submitted = true;

    var flashMessagesService = this.flashMessagesService;

    if(this.changeForm.invalid){
      return;
    }
    
    this.patientService.forgetPassword(this.changeForm.value).subscribe(
      res => {
        console.log(res);
        if (res['success']){
          flashMessagesService.show('Message is sent', { cssClass: 'alert-success', timeout: 3000});
        } else {
          flashMessagesService.show('Failed to send message', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, 
      err => {
        console.log(err);
      });

      this.success = true;
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
