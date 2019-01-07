import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private patientService : PatientService) { 
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
  }

}
