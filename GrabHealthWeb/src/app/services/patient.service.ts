import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class PatientService {

    authToken: any;
    patient: any;

    constructor(private http: HttpClient, public jwtHelperService : JwtHelperService) {}
    url = process.env.WEBSERVERURL || "http://localhost:4000";
    registerPatient(patient){
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/patient/register', patient, {headers : headers});
    }

    authenticatePatient(patient){
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/patient/authenticate', patient, {headers : headers});
    }

    getPatientDetails(){
        let headers = new HttpHeaders();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + '/patient/profile', {headers : new HttpHeaders({
            'Authorization': localStorage.getItem("id_token"),
            'Content-Type': 'application/json'
        })});
    }

    storePatientData(token, patient){
        localStorage.setItem('id_token', token);
        localStorage.setItem('patient', JSON.stringify(patient));
        this.authToken = token;
        this.patient = patient;
    }

    loadToken(){
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    
    logout(){
        this.authToken = null;
        this.patient = null;
        localStorage.clear();
    }

    loggedIn(){
        if (this.loadToken) {
            if (!this.jwtHelperService.isTokenExpired(this.authToken))
                return true;
        } else {
            return false;
        }
    }

    //Get Clinic List
    getClinics(){
        return this.http.get(this.url + '/patient/getClinic');
    }

    //Book Clinic
    bookClinics(clinic){
        return this.http.post(this.url + '/patient/bookClinic', clinic, {headers: new HttpHeaders({
            'Authorization': localStorage.getItem("id_token")
        })});
    }

    editPatientDetails(patient){
        return this.http.post(this.url + '/patient/editPatientDetail', patient, {headers : new HttpHeaders({
            'Authorization': localStorage.getItem("id_token")
        })});    
    }

    //Get Patient's Appointment
    getBookedClinics(){
        return this.http.get(this.url + '/patient/getBookedClinic', {headers: new HttpHeaders({
            'Authorization': localStorage.getItem("id_token")
        })});
    }

}