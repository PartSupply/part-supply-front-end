import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/compiler/src/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  

  userLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
    password: new FormControl('', Validators.required),
});
  constructor(private httpService: HttpService, private router: Router) { 
  }

  ngOnInit() {
  }
  public async post(): Promise<void> {
    console.log(this.userLoginForm.value);
    let loginResponse = null;
    let userProfile = null;
    try {
      loginResponse = await this.httpService.post('login', this.userLoginForm.value, false);
      console.log(loginResponse);
      localStorage.setItem('user', JSON.stringify(loginResponse));
      userProfile = await this.httpService.get('userProfile');
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      console.log(userProfile);
      let getUserRole = userProfile.data.role.roleName;
      console.log(getUserRole);
      if(getUserRole === 'BUYER'){
        this.router.navigate(['/requestInfo']);
        alert((userProfile.data.firstName).toUpperCase() + " " + "logged in Successfully.");
      }else if(getUserRole === 'SELLER'){
        alert((userProfile.data.firstName).toUpperCase() + " " + "logged in Successfully.");
        this.router.navigate(['/supplierMenu']);
      }else{
        alert("Account is not Approved.");
      }
    } catch (error) {
      console.log(error);
      let message = error.error.message;
      if (message === 'Internal server error') {
        message = 'Wrong Username or Password';
      }
      alert(message);
    }
  }
  signup(){
    this.router.navigate(['/signup']);
  }

  resetPassword() {
    this.router.navigate(['/resetPassword']);
  }
}
