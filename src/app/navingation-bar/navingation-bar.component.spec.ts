import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavingationBarComponent } from './navingation-bar.component';

describe('NavingationBarComponent', () => {
  let component: NavingationBarComponent;
  let fixture: ComponentFixture<NavingationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavingationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavingationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
