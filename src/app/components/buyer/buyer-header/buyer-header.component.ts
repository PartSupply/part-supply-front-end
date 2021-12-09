import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-buyer-header',
  templateUrl: './buyer-header.component.html',
  styleUrls: ['./buyer-header.component.css']
})
export class BuyerHeaderComponent implements OnInit {
  navbarOpen = false;
  _router: string;
  userProfile: unknown;
  user: any;
  constructor(private httpService: HttpService, private router: Router) { 
    this._router = router.url; 
  }

  ngOnInit() {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public async logout(): Promise<void> {
    this.user = JSON.parse(localStorage.getItem('userProfile'));
    const userRole = this.user.data.role.roleName;
    let logoutUrl = '/home';
    if (userRole === 'ADMIN') {
      logoutUrl = '/adminLogin'
    }
    try {
      await this.httpService.post('logout',null);
    } catch (error) {
      localStorage.removeItem('user');
      this.router.navigate([logoutUrl]);
    }
    // Remove localstorage session info 
    localStorage.removeItem('user');
    this.router.navigate([logoutUrl]);
  }
  
  public async getData(): Promise<void>{
    // JUST do redirect from here...
    this.router.navigate(['/buyerRequestList']);
}
homeRoute(){
  this.router.navigate(['/home']);
  }
  async signup(){
    this.userProfile = await this.httpService.get('userProfile');
    console.log(this.userProfile);
    this.router.navigate(['/signup']);
  }

  routeByUrl(url: string) {
    this.router.navigate([url]);
  }

  loggedInUserRole() {
    this.user = JSON.parse(localStorage.getItem('userProfile'));
    const userRole = this.user.data.role.roleName;
    let routeToUrl = ';'
    if (userRole === 'BUYER') {
      routeToUrl = '/requestInfo';
    } else if (userRole === 'SELLER') {
      routeToUrl = '/supplierMenu';
    } else {
      routeToUrl = '/adminHomePage';
    }
    this.router.navigateByUrl(routeToUrl);
  }
}

