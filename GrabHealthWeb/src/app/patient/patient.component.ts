import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { CustomValidators } from '../custom-validators';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  registrationForm = new FormGroup({
    firstName: new FormControl('firstName'),
    lastName: new FormControl('lastName'),
    nric:new FormControl('nric'),
    contactNo: new FormControl('contactNo'),
    gender: new FormControl('gender'),
    dob: new FormControl('dob'),
    address: new FormControl('address'),
    nationality: new FormControl('nationality'),
    email: new FormControl('email'),
    password: new FormControl('password'),
  });
  
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService, private router: Router, private http: HttpClient, private flashMessagesService : FlashMessagesService) { 
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nric: ['',Validators.required],
      gender: ['',Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      nationality: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required],
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

  onSubmit(){
    this.submitted = true;

    var flashMessagesService = this.flashMessagesService;

    if(this.registrationForm.invalid){
      return;
    }
    this.patientService.registerPatient(this.registrationForm.value).subscribe(
      res=>{
        console.log(res);
        if(res['success']){
          flashMessagesService.show('Successfully registered', { cssClass: 'alert-success', timeout: 3000});
          this.router.navigateByUrl('login');
        } else {
          flashMessagesService.show('Failed to register', { cssClass: 'alert-danger', timeout: 3000});
        }
      },
      err=>{
        console.log(err);
      });
      
    this.success = true;

  }

  ngOnInit() {
  }


}
