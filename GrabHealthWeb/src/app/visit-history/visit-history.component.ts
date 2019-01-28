import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-visit-history',
  templateUrl: './visit-history.component.html',
  styleUrls: ['./visit-history.component.scss']
})
export class VisitHistoryComponent implements OnInit {

  constructor(private patientService : PatientService, private flashMessagesService : FlashMessagesService) { }

  appointments: Array<any>;
  clinics: Array<any>;

  ngOnInit() {
    this.getVisitHistory();
  }

  getVisitHistory(){
    this.patientService.getVisitHistory().subscribe(
      res => {
        this.appointments = res['appointments'];
        this.clinics = res['clinics'];
      },
      err => {
        console.log(err);
      }
    )
  }

}
