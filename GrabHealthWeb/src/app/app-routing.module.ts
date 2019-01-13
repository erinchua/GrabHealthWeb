import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PatientComponent} from './patient/patient.component';
import {LoginComponent} from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FindClinicComponent } from './find-clinic/find-clinic.component';
import { AuthGuard } from 'guards/auth.guard';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'find-clinic', component: FindClinicComponent},
  {path: 'booking-status', component: BookingStatusComponent},
  {path: 'visit-history', component: VisitHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
