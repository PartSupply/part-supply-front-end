import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerEditOfferComponent } from './seller-edit-offer.component';

describe('SellerEditOfferComponent', () => {
  let component: SellerEditOfferComponent;
  let fixture: ComponentFixture<SellerEditOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerEditOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerEditOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
