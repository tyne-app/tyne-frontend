/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BusinessProfileUploadImageLocalsComponent } from './business-profile-upload-image-locals.component';

describe('BusinessProfileUploadImageLocalsComponent', () => {
  let component: BusinessProfileUploadImageLocalsComponent;
  let fixture: ComponentFixture<BusinessProfileUploadImageLocalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessProfileUploadImageLocalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessProfileUploadImageLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
