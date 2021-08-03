/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BusinessProfileEditWorkDaysComponent } from './business-profile-edit-work-days.component';

describe('BusinessProfileEditWorkDaysComponent', () => {
  let component: BusinessProfileEditWorkDaysComponent;
  let fixture: ComponentFixture<BusinessProfileEditWorkDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessProfileEditWorkDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessProfileEditWorkDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
