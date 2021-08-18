import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { HttpService } from './services/http.service';
import decode from 'jwt-decode';


@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private auth: HttpService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot): boolean  {
        const expectedRole = route.data.expectedRole;
        const token = localStorage.getItem('user');
        // decode the token to get its payload
         const tokenPayload: any = decode(token);
        // console.log(tokenPayload);
         if (!this.auth.loggedIn() || tokenPayload.user.role.roleName !== expectedRole) {
            this.router.navigate(['/home']);
            return false;
          }
          return true;
    }
}