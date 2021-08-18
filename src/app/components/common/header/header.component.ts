import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  homeRoute(){
  this.router.navigate(['/home']);
  }
}
