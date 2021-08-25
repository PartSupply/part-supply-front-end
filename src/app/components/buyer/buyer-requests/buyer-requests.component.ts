import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { all } from 'q';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-buter-requests',
  templateUrl: './buyer-requests.component.html',
  styleUrls: ['./buyer-requests.component.css']
})
export class BuyerRequestsComponent implements OnInit {
  navbarOpen = false;

  partRequestList;
  constructor(private httpService: HttpService, private router: Router) { }
  filterPartType(partType: any) {
    Object.keys(partType).forEach(key => {
      if (!partType[key]) delete partType[key];
    });
    return Object.keys(partType).join(", ");
  }

  filterPartRequestData(data: any) {
     for(let i=0; i<data.length; i++) {
       data[i].partType = this.filterPartType(data[i].partType);
     }
     return data;
  }
  async ngOnInit() {
    const partRequestData: any = await this.httpService.get('buyer/partsRequest');
    this.partRequestList = this.filterPartRequestData(partRequestData.data);
    console.log(this.partRequestList);
   
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
  homeRoute(){
    this.router.navigate(['/home']);
    }
}
