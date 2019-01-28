import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Injectable()
export class PatientService {

    authToken: any;
    patient: any;

    constructor(private http: HttpClient, public jwtHelperService : JwtHelperService, private router: Router) {}
    url =  environment.webserverurl;
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
            'Authorization': sessionStorage.getItem("id_token"),
            'Content-Type': 'application/json'
        })});
    }

    storePatientData(token, patient){
        sessionStorage.setItem('id_token', token);
        sessionStorage.setItem('patient', JSON.stringify(patient));
        this.authToken = token;
        this.patient = patient;
    }

    loadToken(){
        const token = sessionStorage.getItem('id_token');
        this.authToken = token;
    }

    getUserPayload(){
        var token = sessionStorage.getItem('id_token');
        if (token){
            return token;
        } else 
            return null;
    }
    deleteToken(){
        sessionStorage.clear();
    }

    logout(){
        var userPayload = this.getUserPayload();
        var authHeader = { headers: new HttpHeaders({"Authorization":  this.getUserPayload()}) };
        if (userPayload) {
            if (!this.jwtHelperService.isTokenExpired(userPayload)){
                return this.http.post(this.url + '/patient/blacklistToken', "Nothing", authHeader).subscribe(
                    res=>{
                        this.deleteToken();
                        this.router.navigateByUrl('/login');
                    });
            } else {
                this.deleteToken();
                this.router.navigateByUrl('/login');

            }
        } else {
            this.deleteToken();
            this.router.navigateByUrl('/login');

        }
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
            'Authorization': sessionStorage.getItem("id_token")
        })});
    }

    //Edit Patient's Profile
    editPatientDetails(patient){
        return this.http.post(this.url + '/patient/editPatientDetail', patient, {headers : new HttpHeaders({
            'Authorization': sessionStorage.getItem("id_token")
        })});    
    }

    //Get Patient's Appointment
    getBookedClinics(){
        return this.http.get(this.url + '/patient/getBookedClinic', {headers: new HttpHeaders({
            'Authorization': sessionStorage.getItem("id_token")
        })});
    }

    //Cancel Patient's Booking
    cancelBookings(clinic){
        return this.http.post(this.url + '/patient/cancelBooking', clinic, {headers: new HttpHeaders({
            'Authorization': sessionStorage.getItem("id_token")
        })});    
    }

    //Get Patient's Visit History
    getVisitHistory(){
        return this.http.get(this.url + '/patient/getVisitHistory', {headers: new HttpHeaders({
            'Authorization': sessionStorage.getItem("id_token")
        })});
    }

    //Change Patient's Password
    changePassword(patient){
        return this.http.post(this.url + '/patient/changePassword', patient, {headers: new HttpHeaders({
            'Authorization': sessionStorage.getItem("id_token")
        })}); 
    }

    //Forget Password
    forgetPassword(patient){
        return this.http.post(this.url + '/patient/forgetPassword', patient); 
    }

}