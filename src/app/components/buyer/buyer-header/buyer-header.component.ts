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
  constructor(private httpService: HttpService, private router: Router) { 
    this._router = router.url; 
  }

  ngOnInit() {
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
  
  public async getData(): Promise<void>{
    // JUST do redirect from here...
    this.router.navigate(['/buyerRequestList']);
}
homeRoute(){
  this.router.navigate(['/home']);
  }
}
