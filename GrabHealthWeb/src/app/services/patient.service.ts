import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PatientService {

    authToken: any;
    patient: any;

    constructor(private http: HttpClient) {}

    registerPatient(patient){
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:4000/patient/register', patient, {headers : headers});
    }

    authenticatePatient(patient){
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:4000/patient/authenticate', patient, {headers : headers});
    }

    getPatientDetails(){
        let headers = new HttpHeaders();
        this.loadToken();
        headers.append('Authorization', this.authToken)
        headers.append('Content-Type', 'application/json');
        return this.http.get(`http://localhost:4000/patient/profile`, {headers : headers});
    }

    storeUserData(token, patient){
        localStorage.setItem('id_token', token);
        localStorage.setItem('patient', JSON.stringify(patient));
        this.authToken = token;
        this.patient = patient;
    }

    loadToken(){
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
  

}