import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRequestsComponent } from './buyer-requests.component';

describe('ButerRequestsComponent', () => {
  let component: BuyerRequestsComponent;
  let fixture: ComponentFixture<BuyerRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
