import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-menu',
  templateUrl: './supplier-menu.component.html',
  styleUrls: ['./supplier-menu.component.css']
  
})
export class SupplierMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  SeeAllRequests(){
  this.router.navigate(['/seeAllRequests']);
  }
  SeeOffersStatus(){
    this.router.navigate(['/seeOfferStatus']);
  }
}
