import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-view-requests',
  templateUrl: './admin-view-requests.component.html',
  styleUrls: ['./admin-view-requests.component.css']
})
export class AdminViewRequestsComponent implements OnInit {
  response: any;

  constructor(public httpService:HttpService) { }

  async ngOnInit() {
    this.response = await this.httpService.get('admin/allBuyerPartRequest');

  }

}
