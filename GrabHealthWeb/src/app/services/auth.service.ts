import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PatientService } from '../services/patient.service';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, public jwtHelperService: JwtHelperService, private patientService : PatientService) {}

    loggedIn(){
        if (this.patientService.loadToken) {
            if (this.jwtHelperService.isTokenExpired())
                return false;
        } else {
            return true;
        }

    }
}