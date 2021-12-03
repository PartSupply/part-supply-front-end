import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-view-application',
  templateUrl: './admin-view-application.component.html',
  styleUrls: ['./admin-view-application.component.css']
})
export class AdminViewApplicationComponent implements OnInit {
  response: any;
  shouldDisplayBanner: boolean;
  displayContent: string;
  constructor(public httpService: HttpService) { }

  async ngOnInit() {
    this.response = await this.httpService.get('admin/accountsCreateRequest');
  }
  public async acceptApplication(data: any){
    console.log(data);
    const payload = {
      "userId": data.id,
      "isAccountApproved": true,
      "isAccountActive": true
    }
    const response = await this.httpService.put('admin/updateAccountStatus', payload);
    this.shouldDisplayBanner = true;
    this.displayContent = `${data.email} account has been approved`;
    setTimeout(() => {
      this.shouldDisplayBanner = false;
      window.location.reload();
    }, 5000);
  }

  public async closeAccount(data: any) {
    const payload = {
      "userId": data.id,
      "isAccountApproved": true,
      "isAccountActive": false
    }
    const response = await this.httpService.put('admin/updateAccountStatus', payload);
    this.shouldDisplayBanner = true;
    this.displayContent = `${data.email} account has been closed`;
    setTimeout(() => {
      this.shouldDisplayBanner = false;
      window.location.reload();
    }, 5000);
  }

}
