import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css']
})
export class SellerHeaderComponent implements OnInit {
  _router: string;
  navbarOpen = false;
  whiteListHeader: string[] = ['/sellerAcceptOffer', '/seeOfferStatus'];
  shouldDisplayMyOfferStatus: boolean = true;
  constructor(private httpService: HttpService, private router: Router) {
    this._router = router.url; 
    console.log(this._router)
    if (this.whiteListHeader.includes(window.location.pathname)) {
      this.shouldDisplayMyOfferStatus = false;
    }
  }

   ngOnInit() {
    
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public async logout(): Promise<void> {
    try {
      await this.httpService.post('logout',null);
    } catch (error) {
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    }
    // Remove localstorage session info 
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
  
  public async getData(): Promise<void>{
    // JUST do redirect from here...
    this.router.navigate(['/buyerRequestList']);
}
homeRoute(){
  this.router.navigate(['/home']);
  }

routeByUrl(url: string) {
  this.router.navigate([url]);
}

}


