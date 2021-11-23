import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDrinksComponent } from './menu-drinks.component';

describe('MenuDrinksComponent', () => {
  let component: MenuDrinksComponent;
  let fixture: ComponentFixture<MenuDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
