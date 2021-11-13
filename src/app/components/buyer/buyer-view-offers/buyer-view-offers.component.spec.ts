import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerViewOffersComponent } from './buyer-view-offers.component';

describe('BuyerViewOffersComponent', () => {
  let component: BuyerViewOffersComponent;
  let fixture: ComponentFixture<BuyerViewOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerViewOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerViewOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
