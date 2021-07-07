import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRequestComponent } from './second-request.component';

describe('SecondRequestComponent', () => {
  let component: SecondRequestComponent;
  let fixture: ComponentFixture<SecondRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
