import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private patientService : PatientService, private router : Router){

    }

    canActivate(){
        if (this.patientService.loggedIn()){
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
