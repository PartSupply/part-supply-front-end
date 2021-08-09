import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-supplier-menu',
  templateUrl: './supplier-menu.component.html',
  styleUrls: ['./supplier-menu.component.css']
})
export class SupplierMenuComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  public async post(): Promise<void> {
    const response = await this.httpService.post('logout',null);
    // Remove localstorage session info 
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

}
