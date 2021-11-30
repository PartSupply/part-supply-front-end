import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-view-application',
  templateUrl: './admin-view-application.component.html',
  styleUrls: ['./admin-view-application.component.css']
})
export class AdminViewApplicationComponent implements OnInit {
  response: any;
  constructor(public httpService: HttpService) { }

  async ngOnInit() {
    this.response = await this.httpService.get('admin/accountsCreateRequest');
  }
  acceptApplication(){
    // const isAccountApproved = true;
    // const isAccountActive = true;
  }

}
