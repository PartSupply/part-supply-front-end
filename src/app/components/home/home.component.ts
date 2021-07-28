import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



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

  constructor(private httpService: HttpService) { 

  }

  ngOnInit() {
  }

  public post(): void {
    console.log(this.userLoginForm.value);
    this.httpService.post('login', this.userLoginForm.value).subscribe((success) => {
      console.log('success', success);
      console.log(this.userLoginForm.controls['role'].value.roleName);
    
    }, (error) => {
      console.log('error', error);
    });
  }

}
