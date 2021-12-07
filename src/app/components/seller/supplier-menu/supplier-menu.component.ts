import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-supplier-menu',
  templateUrl: './supplier-menu.component.html',
  styleUrls: ['./supplier-menu.component.css']
  
})
export class SupplierMenuComponent implements OnInit {
//   firstName: any;
//   lastName: any;
// userProfile: any;
  constructor(private router: Router, private httpService: HttpService) { }

  async ngOnInit() {
  //   this.userProfile = await this.httpService.get('userProfile');
  //   console.log(this.userProfile);
  //  this.firstName = this.userProfile.data.firstName;
  //  this.lastName = this.userProfile.data.lastName;
  //  console.log(this.firstName);
  }
  SeeAllRequests(){
  this.router.navigate(['/seeAllRequests']);
  }
  SeeOffersStatus(){
    this.router.navigate(['/seeOfferStatus']);
  }
}
