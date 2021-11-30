import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewOffersComponent } from './admin-view-offers.component';

describe('AdminViewOffersComponent', () => {
  let component: AdminViewOffersComponent;
  let fixture: ComponentFixture<AdminViewOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
