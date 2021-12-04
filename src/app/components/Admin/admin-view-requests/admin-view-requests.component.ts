import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-view-requests',
  templateUrl: './admin-view-requests.component.html',
  styleUrls: ['./admin-view-requests.component.css']
})
export class AdminViewRequestsComponent implements OnInit {
  response: any;
  idList = new Set();
  constructor(public httpService:HttpService) { }

  async ngOnInit() {
    this.response = await this.httpService.get('admin/allBuyerPartRequest');

  }

  public selectDeleteItem(id) {
    if (this.idList.has(id)) {
      this.idList.delete(id);
    } else {
      this.idList.add(id);
    }
  }

  public async deleteItems() {
    const array = [];
    for (let item of this.idList) {
      array.push(item);
    }

    await this.httpService.post('admin/deletePartRequest', { partRequestIds: array });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}
