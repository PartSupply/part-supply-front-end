import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminViewRequestsComponent } from './admin-view-requests.component';

describe('AdminViewRequestsComponent', () => {
  let component: AdminViewRequestsComponent;
  let fixture: ComponentFixture<AdminViewRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
