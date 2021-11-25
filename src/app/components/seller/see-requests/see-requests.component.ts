import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'selenium-webdriver';
import { HttpService } from 'src/app/services/http.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SellerPlaceOfferComponent } from '../seller-place-offer/seller-place-offer.component';
import { SellerAskQuestionComponent } from '../seller-ask-question/seller-ask-question.component';

@Component({
  selector: 'app-see-requests',
  templateUrl: './see-requests.component.html',
  styleUrls: ['./see-requests.component.css']
  
})
export class SeeRequestsComponent implements OnInit {

  partRequestList: any;
  userSelectedPartRequest: any;

  constructor(private httpService: HttpService, private router: Router, public dialog: MatDialog) { }
  filterPartType(partType: any) {
    Object.keys(partType).forEach(key => {
      if (!partType[key]) delete partType[key];
    });
    return Object.keys(partType).join(", ");
  }
  filterPartRequestData(data: any) {
    for(let i=0; i<data.length; i++) {
      data[i].partType = this.filterPartType(data[i].partType);
    }
    return data;
 }
  async ngOnInit() {
    const partRequestData: any = await this.httpService.get('seller/partsRequest');
    this.partRequestList = this.filterPartRequestData(partRequestData.data);
    console.log(this.partRequestList);
  }
  
   openDialog(partRequest) {
    this.userSelectedPartRequest = partRequest;
    const dialogRef = this.dialog.open(SellerPlaceOfferComponent, {
      width: '500px',
      height: '665px',
      data: partRequest,
    });
  
  
  }
  // SellerAskQuestionComponent
  openDialog1(partRequest) {
    this.userSelectedPartRequest = partRequest;
    const dialogRef = this.dialog.open(SellerAskQuestionComponent, {
      width: '500px',
      height: '665px',
      data: partRequest,
    });
  }
}
  
  
  

