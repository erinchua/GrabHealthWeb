import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { 
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
      attach: ['',Validators.required],
      userName: ['',Validators.required],
      password: ['',Validators.compose([Validators.required, 
                                      CustomValidators.patternValidator(/\d/, { hasNumber: true }),
                                      CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                                      CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true}),
                                      CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true}),
                                      Validators.minLength(8)])],
      

    })
  }

  onSubmit(){
    this.submitted = true;

    if(this.registrationForm.invalid){
      return;
    }

    this.success = true;
  }

  ngOnInit() {
  }

}
