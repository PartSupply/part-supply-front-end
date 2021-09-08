import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeOfferStatusComponent } from './see-offer-status.component';

describe('SeeOfferStatusComponent', () => {
  let component: SeeOfferStatusComponent;
  let fixture: ComponentFixture<SeeOfferStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeOfferStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeOfferStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
