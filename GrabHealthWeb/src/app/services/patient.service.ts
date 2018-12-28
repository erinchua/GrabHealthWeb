import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PatientService {

    constructor(private http: HttpClient) {}

    registerPatient(patient){
        return this.http.post('http://localhost:4000/patient/register', patient);
    }
  

}