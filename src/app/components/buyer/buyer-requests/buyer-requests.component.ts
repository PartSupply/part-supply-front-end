import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ShowChatComponent } from '../show-chat/show-chat.component';

@Component({
  selector: 'app-buter-requests',
  templateUrl: './buyer-requests.component.html',
  styleUrls: ['./buyer-requests.component.css']
})
export class BuyerRequestsComponent implements OnInit {
  _router: string;
  navbarOpen = false;
  partRequestList: any;
  chatData: any;
  chatMap = new Map();
  
  constructor(private httpService: HttpService, private router: Router, public dialog: MatDialog) {
    this._router = router.url; 
   }
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
    const partRequestData: any = await this.httpService.get('buyer/partsRequest');
    this.partRequestList = this.filterPartRequestData(partRequestData.data.partRequest);
    this.chatData = partRequestData.data.chatData;
    for(const key in this.chatData) {
      if(this.chatData.hasOwnProperty(key)) {
          var value = this.chatData[key];
          this.chatMap.set(key, value);
          //do something with value;
      }
  }
    console.log(this.partRequestList);
   
  } 
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public async logout(): Promise<void> {
    const response = await this.httpService.post('logout',null);
    // Remove localstorage session info 
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
  homeRoute(){
    this.router.navigate(['/home']);
  }
  viewOffers(partRequestId: string){
      console.log(partRequestId);
      this.router.navigate([`/viewOffers/${partRequestId}`]);
  }
  isChatAvailable(id) {
    const value: any[] = this.chatMap.get(id+'');
    return value.length > 0;
  }
  chatPopup(partRequest) {
    const value: any[] = this.chatMap.get(partRequest.id+'');
    const uniqueSellerId = new Set();
    value.forEach((val) => {
      uniqueSellerId.add(val.SELLER_ID);
    });
    const values = Array.from(uniqueSellerId);
    const sendResponse = [];
    values.forEach((val) => {
      sendResponse.push({
        partRequestId: partRequest.id,
        sellerId: val,
        partRequest,
      });
    })
    const dialogRef = this.dialog.open(ShowChatComponent, {
      width: '400px',
      height: '600px',
      data: sendResponse,
    });
  }

  routeByUrl(url: string) {
    this.router.navigate([url]);
  }
}
