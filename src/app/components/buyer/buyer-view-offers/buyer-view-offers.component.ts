import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-buyer-view-offers',
  templateUrl: './buyer-view-offers.component.html',
  styleUrls: ['./buyer-view-offers.component.css']
})
export class BuyerViewOffersComponent implements OnInit {

  response: any;
  constructor(public httpService: HttpService) { }

  async ngOnInit() {
    const url = window.location.pathname;
    const requestNumber = url.split('/')[url.split('/').length -1]
    this.response = await this.httpService.get(`buyer/partOffers/${requestNumber}`);
  }

}
