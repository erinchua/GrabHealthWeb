import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

import { IssueService } from './issue.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PatientComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
