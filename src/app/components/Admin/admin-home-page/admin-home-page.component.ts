import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  viewApplications(){
    this.router.navigate(['adminViewApplications']);
  }
  viewRequests(){
    this.router.navigate(['adminViewRequests']);
  }
  viewOffers(){
    this.router.navigate(['adminViewOffers']);
  }
  viewTransactions(){
    this.router.navigate(['adminViewTransactions']);
  }

}
