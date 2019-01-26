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

  appointment: any;
  date: '';
  billedAmount: '';
  clinicName: '';

  appointments = [{
    date: '12/01/2019',
    billedAmount: '$30',
    clinicName: 'Vlad Clinic'
  }];

  //appointments: Array<any>;

  ngOnInit() {
    //this.onVisitHistory();
  }

  // onVisitHistory(){
  //   this.patientService.getVisitHistory().subscribe(
  //     res => {
  //       this.appointments = res['appointments'];
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

}
