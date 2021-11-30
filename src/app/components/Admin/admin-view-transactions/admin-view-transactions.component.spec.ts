import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminViewTransactionsComponent } from './admin-view-transactions.component';

describe('AdminViewTransactionsComponent', () => {
  let component: AdminViewTransactionsComponent;
  let fixture: ComponentFixture<AdminViewTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
