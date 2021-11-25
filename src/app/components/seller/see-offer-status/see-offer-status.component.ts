import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SellerEditOfferComponent } from '../seller-edit-offer/seller-edit-offer.component';

@Component({
  selector: 'app-see-offer-status',
  templateUrl: './see-offer-status.component.html',
  styleUrls: ['./see-offer-status.component.css']
})
export class SeeOfferStatusComponent implements OnInit {
  offerStatus: any;
  userProfile: any;
  bidMap = new Map([
    ['OUTBID', 'Not Best Offer'],
    ['BEST_BID', 'Best Offer']
  ]);
  userSelectedPartRequest: any;
  partRequestList: any;
  constructor(public httpService: HttpService, public dialog: MatDialog, public router: Router) { }
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
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    const partRequestData: any = await this.httpService.get('seller/partBidsRequest');
    this.offerStatus = partRequestData.data;
    console.log(this.offerStatus);
  }
  openDialog(offers) {
    this.userSelectedPartRequest = offers;
    const dialogRef = this.dialog.open(SellerEditOfferComponent, {
      width: '500px',
      height: '665px',
      data: offers,
    });

   }

  displayBuyerInfo(offer: any) {
    const queryParams = {
      partRequestId: `${offer.partRequestId}`,
      partBidRequestId:`${offer.bidId}`,
      isBuyer: false,
    }
    this.router.navigate(['sellerAcceptOffer'], { queryParams });
  }

  //  const partRequest: any = await this.httpService.get('seller/partsRequest');
  //   this.partRequestList = this.filterPartRequestData(partRequestData.data);
}
