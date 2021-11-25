import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAskQuestionComponent } from './seller-ask-question.component';

describe('SellerAskQuestionComponent', () => {
  let component: SellerAskQuestionComponent;
  let fixture: ComponentFixture<SellerAskQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerAskQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
