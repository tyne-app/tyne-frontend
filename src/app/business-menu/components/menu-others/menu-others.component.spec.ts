import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOthersComponent } from './menu-others.component';

describe('MenuOthersComponent', () => {
  let component: MenuOthersComponent;
  let fixture: ComponentFixture<MenuOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
