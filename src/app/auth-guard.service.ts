import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpService } from './services/http.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: HttpService, private router: Router){}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
      
    } else {
      this.router.navigate(['/home'])
      return false;
    }
  }
}
