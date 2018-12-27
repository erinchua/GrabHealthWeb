import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClinicComponent } from './find-clinic.component';

describe('FindClinicComponent', () => {
  let component: FindClinicComponent;
  let fixture: ComponentFixture<FindClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
