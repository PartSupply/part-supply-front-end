import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-buyer-view-offers',
  templateUrl: './buyer-view-offers.component.html',
  styleUrls: ['./buyer-view-offers.component.css']
})
export class BuyerViewOffersComponent implements OnInit {

  response: any;
  partOffers: any[];
  partRequest: any;
  isViewReady = false;
  isOfferAccepted = false;
  acceptedOffer: any[] = [];
  constructor(public httpService: HttpService, public router: Router) { }

  async ngOnInit() {
    const url = window.location.pathname;
    const requestNumber = url.split('/')[url.split('/').length -1]
    this.response = await this.httpService.get(`buyer/partOffers/${requestNumber}`);
    this.partOffers = this.response.data.partOffers;
    this.partRequest = this.response.data.partRequest;
    this.isAnyOfferAccepted();
    if (this.isOfferAccepted) {
      this.partOffers = this.acceptedOffer;
    }
    this.isViewReady = true;
    console.log(this.response);
  }
  public isAnyOfferAccepted() {
    this.partOffers.forEach((offer) => {
      if (offer.isOfferAccepted && !this.isOfferAccepted) {
        this.isOfferAccepted = true;
        this.acceptedOffer.push(offer);
      }
    })
  }
  async acceptOffer(offerId){
    const payload = {
      "id": this.response.data.partRequest.id+'',
      "bidRequestId": offerId+'',
    };

    const response = await this.httpService.post('buyer/acceptPartOffer', payload);
    const queryParams = {
      partRequestId: `${this.response.data.partRequest.id}`,
      partBidRequestId:`${offerId}`,
      isBuyer: true,
    }
    this.router.navigate(['buyerAcceptOffer'], { queryParams });
  }

  public getButtonClass() {
    if (this.acceptedOffer) {
      return 'btn-success';
    }
    return 'btn-danger';
  }

  public getBtnTextLabel() {
    if (this.acceptedOffer) {
      return 'Accepted';
    }
    return 'Accepted';
  }
}
