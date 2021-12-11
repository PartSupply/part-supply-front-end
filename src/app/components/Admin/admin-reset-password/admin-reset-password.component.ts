import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-reset-password',
  templateUrl: './admin-reset-password.component.html',
  styleUrls: ['./admin-reset-password.component.css']
})
export class AdminResetPasswordComponent implements OnInit {
  isEmailInvalid: boolean;
  isOtpSend: boolean;
  passwordChangeError: boolean;
  userLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
    password: new FormControl('', Validators.required),
    otp: new FormControl('', Validators.required),
  });
  
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  async getOtp() {
    const payload = {
      email: this.userLoginForm.get('email').value,
    }
    try {
      await this.httpService.post('sendOneTimeCode', payload, false);
    } catch (error) {
      this.isEmailInvalid = true;
      return;
    }
    this.isOtpSend = true;
    this.isEmailInvalid = false;
  }
  async resetPassword() {
    const payload = {
      "email": this.userLoginForm.get('email').value,
      "password": this.userLoginForm.get('password').value,
      "oneTimeCode": +this.userLoginForm.get('otp').value
    };
    try {
      await this.httpService.post('resetPassword', payload, false);
    } catch (error) {
      this.passwordChangeError = true;
      return;
    }
    this.passwordChangeError = false;
    this.router.navigate(['/adminLogin']);
  }
}
