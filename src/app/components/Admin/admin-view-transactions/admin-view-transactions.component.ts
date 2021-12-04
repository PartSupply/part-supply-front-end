import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-view-transactions',
  templateUrl: './admin-view-transactions.component.html',
  styleUrls: ['./admin-view-transactions.component.css']
})
export class AdminViewTransactionsComponent implements OnInit {

  response: any;
  generateReport = new FormGroup({
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    sellerEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
    commissionPercentage: new FormControl('', Validators.required),
});
 
  constructor(public httpService: HttpService) { }

  async ngOnInit() {
   
    
  }
  public async post(): Promise<void> {
    const payload = {
      startDate: this.generateReport.get('startDate').value,
      endDate: this.generateReport.get('endDate').value,
      sellerEmail: this.generateReport.get('sellerEmail').value,
      commissionPercentage: this.generateReport.get('commissionPercentage').value,
    };
    const response = await this.httpService.post('admin/getReport',payload);
  }
}
