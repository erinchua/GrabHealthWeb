import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'GrabHealth';

  constructor(private router : Router, private patientService : PatientService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.patientService.logout();
    this.router.navigateByUrl('/');
    return false;
  }


}
