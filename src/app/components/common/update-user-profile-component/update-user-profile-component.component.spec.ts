import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserProfileComponentComponent } from './update-user-profile-component.component';

describe('UpdateUserProfileComponentComponent', () => {
  let component: UpdateUserProfileComponentComponent;
  let fixture: ComponentFixture<UpdateUserProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
