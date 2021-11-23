import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBottomPlateComponent } from './menu-bottom-plate.component';

describe('MenuBottomPlateComponent', () => {
  let component: MenuBottomPlateComponent;
  let fixture: ComponentFixture<MenuBottomPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBottomPlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBottomPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
