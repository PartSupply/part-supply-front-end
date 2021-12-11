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
  amount: any;
  date: any;
  shouldDisplayReport: boolean;
  userProfile: any;
  isError: boolean;
  generateReport = new FormGroup({
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    sellerEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
    commissionPercentage: new FormControl(''),
});
 
  constructor(public httpService: HttpService) { }

   ngOnInit() {
   
    
  }
  public async post(): Promise<void> {
    let percentage = 5; 
    if (this.generateReport.get('commissionPercentage').value) {
      percentage = this.generateReport.get('commissionPercentage').value;
    }
    const payload = {
      startDate: this.generateReport.get('startDate').value,
      endDate: this.generateReport.get('endDate').value,
      sellerEmail: this.generateReport.get('sellerEmail').value,
      commissionPercentage: percentage,
    };
    this.isError = false;
    try {
      this.response = await this.httpService.post('admin/getReport',payload);
      this.userProfile = await this.httpService.get('userProfile');
    } catch (error) {
      this.isError = true;
    }
    this.response = this.response.data;
    this.shouldDisplayReport = true;
    this.amount = (this.response.amount).toFixed(2);
  }
  


}
