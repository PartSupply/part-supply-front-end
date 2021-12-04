import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  navbarOpen = false;
  _router: string;
  constructor(private httpService: HttpService, private router: Router) {
    this._router = router.url; 
    console.log(this._router)
   }

  ngOnInit() {
  }
  homeRoute(){
    this.router.navigate(['adminHomePage']);
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
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
    this.router.navigate(['adminViewTransactions'])
  }

  public async logout(): Promise<void> {
    try {
      await this.httpService.post('logout',null);
    } catch (error) {
      localStorage.removeItem('user');
      this.router.navigate(['/adminLogin']);
    }
    // Remove localstorage session info 
    localStorage.removeItem('user');
    this.router.navigate(['/adminLogin']);
  }
  

}

