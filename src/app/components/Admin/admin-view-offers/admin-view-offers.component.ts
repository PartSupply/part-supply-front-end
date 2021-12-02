import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-view-offers',
  templateUrl: './admin-view-offers.component.html',
  styleUrls: ['./admin-view-offers.component.css']
})
export class AdminViewOffersComponent implements OnInit {
  response: any;
  buyerInfoResponse: any;
  partRequestId: any;
  partBidRequestId: any;
  constructor(public httpService: HttpService, public router:Router) { }

  async ngOnInit() {
    this.response = await this.httpService.get('admin/allSellerOfferRequest');
    // this.buyerInfoResponse = await this.httpService.get(`seller/buyerInformation?partRequestId=${this.partRequestId}&partBidRequestId=${this.partBidRequestId}`);
  }
  viewTransactions(){
    this.router.navigate(['adminViewTransactions'])
  }
}
