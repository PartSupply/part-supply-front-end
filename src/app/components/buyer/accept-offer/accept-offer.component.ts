import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-accept-offer',
  templateUrl: './accept-offer.component.html',
  styleUrls: ['./accept-offer.component.css']
})
export class AcceptOfferComponent implements OnInit {
  partRequestId: any;
  partBidRequestId: any;
  response: any;
  isBuyer: any;
  
  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.route.queryParams.subscribe(params => {
      this.partRequestId = params['partRequestId'];
      this.partBidRequestId = params['partBidRequestId'];
      this.isBuyer = params['isBuyer'] === 'true';
  }); 

  }

  async ngOnInit() {
    await this.getSellerInfo();
  }

  async getSellerInfo() {
    console.log(this.partBidRequestId);
    console.log(this.partRequestId);
    console.log(this.isBuyer);
    if (this.isBuyer) {
      this.response = await this.httpService.get(`buyer/sellerInformation?partRequestId=${this.partRequestId}&partBidRequestId=${this.partBidRequestId}`);
    } else {
      this.response = await this.httpService.get(`seller/buyerInformation?partRequestId=${this.partRequestId}&partBidRequestId=${this.partBidRequestId}`);
    }
  }

}
