import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

import { IssueService } from './issue.service';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FindClinicComponent } from './find-clinic/find-clinic.component';
import { PatientService } from './services/patient.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from 'guards/auth.guard';
import { FormsModule } from '@angular/forms';

export function getToken(): string {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PatientComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    FindClinicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpModule,
    AngularFontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken
      }
    }),
    FormsModule
  ],
  providers: [IssueService, PatientService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
