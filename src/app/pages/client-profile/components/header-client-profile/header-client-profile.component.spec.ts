import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderClientProfileComponent } from './header-client-profile.component';

describe('HeaderClientProfileComponent', () => {
  let component: HeaderClientProfileComponent;
  let fixture: ComponentFixture<HeaderClientProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderClientProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderClientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
