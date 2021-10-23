import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { HttpService } from 'src/app/services/http.service';

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
  constructor(public httpService: HttpService) { }

   async ngOnInit() {
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    const partRequestData: any = await this.httpService.get('seller/partBidsRequest');
    this.offerStatus = partRequestData.data;
    console.log(this.offerStatus);
  }

}
