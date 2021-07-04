import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHeaderLoginComponent } from './shared-header-login.component';

describe('SharedHeaderLoginComponent', () => {
  let component: SharedHeaderLoginComponent;
  let fixture: ComponentFixture<SharedHeaderLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedHeaderLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHeaderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
