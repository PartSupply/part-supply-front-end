import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
    password: new FormControl('', Validators.required),
});

  constructor(public httpService: HttpService, public router: Router) { }

  ngOnInit() {
  }
  public async post(): Promise<void> {
    console.log(this.adminLoginForm.value);
    let loginResponse = null;
    let userProfile = null;
    try {
      loginResponse = await this.httpService.post('login', this.adminLoginForm.value, false);
      console.log(loginResponse);
      localStorage.setItem('user', JSON.stringify(loginResponse));
      userProfile = await this.httpService.get('userProfile');
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      console.log(userProfile);
      let getUserRole = userProfile.data.role.roleName;
      console.log(getUserRole);
      if(getUserRole === 'ADMIN'){
        this.router.navigate(['adminHomePage']);
        alert((userProfile.data.firstName).toUpperCase() + " " + "logged in Successfully.");
      }
    } catch (error) {
      console.log(error);
      alert("Wrong Username or Password");
    }
  }

}
