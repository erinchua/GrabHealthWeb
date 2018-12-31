import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms'; 
import { CustomValidators } from '../custom-validators';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
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
    postalCode: new FormControl('postalCode'),
    nationality: new FormControl('nationality'),
    attach: new FormControl('attach'),
    username: new FormControl('userName'),
    password: new FormControl('password'),
  });
  
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService, private router: Router) { 
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nric: ['',Validators.required],
      gender: ['',Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      nationality: ['', Validators.required],
      contactNo: ['', Validators.required],
      attach: ['', Validators.required],
      userName: ['', Validators.required],
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

    if(this.registrationForm.invalid){
      return;
    }
    this.patientService.registerPatient(this.registrationForm.value).subscribe(
      res=>{
        if(res['success'])
          this.router.navigateByUrl('login');
      },
      err=>{
        console.log(err);
      });
      
    this.success = true;

  }

  ngOnInit() {
  }

}
