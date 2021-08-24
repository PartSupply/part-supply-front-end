import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css']
})
export class SellerHeaderComponent implements OnInit {

  navbarOpen = false;
  constructor(private httpService: HttpService, private router: Router) { }

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
}


