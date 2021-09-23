import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'selenium-webdriver';
import { HttpService } from 'src/app/services/http.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SellerPlaceOfferComponent } from '../seller-place-offer/seller-place-offer.component';

@Component({
  selector: 'app-see-requests',
  templateUrl: './see-requests.component.html',
  styleUrls: ['./see-requests.component.css']
})
export class SeeRequestsComponent implements OnInit {

  partRequestList: any;
  userSelctedPartRequest: any;

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
      // const year= data[i].year;
      // console.log(year);
    }
    return data;
 }
  async ngOnInit() {
    const partRequestData: any = await this.httpService.get('seller/partsRequest');
    this.partRequestList = this.filterPartRequestData(partRequestData.data);
    console.log(this.partRequestList);
  }
   openDialog(partRequest){
    this.userSelctedPartRequest = partRequest;
    const dialogRef = this.dialog.open(SellerPlaceOfferComponent, {
      width: '500px',
      height: '665px',
      data: partRequest,
    });
  //  for(let i=0; i<this.partRequestList.length; i++){
  //    let year = this.partRequestList[i].year;
  //    let make = this.partRequestList[i].make;
  //    console.log(year);
  //  }
  
  }
  
}
