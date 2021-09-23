import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SellerPlaceOfferComponent } from './seller-place-offer.component';

describe('SellerPlaceOfferComponent', () => {
  let component: SellerPlaceOfferComponent;
  let fixture: ComponentFixture<SellerPlaceOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerPlaceOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPlaceOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
