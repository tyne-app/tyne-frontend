import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEntriesComponent } from './menu-entries.component';

describe('MenuEntriesComponent', () => {
  let component: MenuEntriesComponent;
  let fixture: ComponentFixture<MenuEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
