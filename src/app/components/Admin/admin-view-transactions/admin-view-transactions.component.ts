import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-view-transactions',
  templateUrl: './admin-view-transactions.component.html',
  styleUrls: ['./admin-view-transactions.component.css']
})
export class AdminViewTransactionsComponent implements OnInit {
 
  constructor(public httpService: HttpService) { }

  async ngOnInit() {
  

  }
  
  
}
