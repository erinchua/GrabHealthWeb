import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-history',
  templateUrl: './visit-history.component.html',
  styleUrls: ['./visit-history.component.scss']
})
export class VisitHistoryComponent implements OnInit {

  constructor() { }

  appointment: any;
  date: '';
  billedAmount: '';
  clinicName: '';

  appointments = [{
    date: '12/01/2019',
    billedAmount: '$30',
    clinicName: 'Vlad Clinic'
  }];

  ngOnInit() {
  }

}
