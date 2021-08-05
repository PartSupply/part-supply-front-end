import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  userLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
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
      loginResponse = await this.httpService.post('login', this.userLoginForm.value);
      localStorage.setItem('user', JSON.stringify(loginResponse));
      userProfile = await this.httpService.get('userProfile');
      let getUserRole = userProfile.data.role.roleName;
      if(getUserRole === 'BUYER'){
        this.router.navigate(['/MakeRequest']);
        alert(userProfile.data.firstName + "  " +"Successfully log in");
      }else{
        this.router.navigate(['/supplierMenu']);
      }    
    } catch (error) {
      alert("Wrong Username or Password");
    }
  }
}
