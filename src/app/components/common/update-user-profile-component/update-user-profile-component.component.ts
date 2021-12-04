import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-update-user-profile-component',
  templateUrl: './update-user-profile-component.component.html',
  styleUrls: ['./update-user-profile-component.component.css']
})
export class UpdateUserProfileComponentComponent implements OnInit {
  
  user: any;

  userProfileForm: FormGroup;
  deliveryRadius: string[] = ['5 miles', '10 miles', '20 miles', '25 miles', 'Anywhere In The USA'];
  isMailDeliveryAcceptable: string[] = ['Local Only' , 'Local and Shipment']; 
  state: string[] = ['MI'];
  roleName: string[] = ['BUYER', 'SELLER', 'ADMIN'];
  country: string[] = ['USA'];

  constructor(private httpService: HttpService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('userProfile'));  
  }

  async ngOnInit() {
  this.userProfileForm  = new FormGroup({
      firstName: new FormControl(this.user.data.firstName, Validators.required),
      lastName: new FormControl(this.user.data.lastName, Validators.required),
      email: new FormControl(this.user.data.email, [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
      password: new FormControl(this.user.data.password, [Validators.minLength(8)]),
      verifyPassword: new FormControl(this.user.data.verifyPassword),
      companyName: new FormControl(this.user.data.companyName,Validators.required),
      address: new FormGroup({
              addressLineOne: new FormControl(this.user.data.address.addressLineOne, Validators.required),
              city: new FormControl(this.user.data.address.city, Validators.required),
              state: new FormControl(this.user.data.address.state, Validators.required),
              zipCode: new FormControl(this.user.data.address.zipCode, [Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]{1,6}$')]),
              country: new FormControl(this.user.data.address.country, Validators.required),
            }),
      isMailDeliveryAcceptable: new FormControl(this.user.data.isMailDeliveryAcceptable, Validators.required),
      role: new FormGroup({
                roleName:new FormControl(this.user.data.role.roleName, Validators.required),
              }),
      phoneNumber: new FormControl(this.user.data.phoneNumber,[Validators.required, Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]),
      faxNumber: new FormControl(this.user.data.faxNumber, [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{1,10}$')]),
      deliveryRadius: new FormControl(this.user.data.deliveryRadius),
    });

    setTimeout(()=>{
      const control = this.userProfileForm.get('deliveryRadius');
      const roleName = this.userProfileForm.get('role.roleName').value;
      console.log(roleName);
      if (roleName === 'SELLER') {
        document.getElementById('deliveryRadius').style.display = "block";
  
        if (control) {
          control.setValidators([Validators.required]);
          control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
      } else {
        document.getElementById('deliveryRadius').style.display = "none";
        this.userProfileForm.get('deliveryRadius').clearValidators();
        if (control) {
          console.log('here', control);
          control.reset();
          control.clearValidators();
          control.setValidators([]);
          control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
      }
    },3000);
  }

  public async SelectRole(inputVal: string) {
    
  }

  public async onBlurMethod(event: any) {  
    const varifyPasswordField = event.target.value; 
    // console.log(varifyPasswordField); 
    const passwordField = this.userProfileForm.get('password').value;
    // console.log(passwordField);
    if (varifyPasswordField != passwordField) {
      this.userProfileForm.get('verifyPassword').setValidators([Validators.required]);
      this.userProfileForm.get('verifyPassword').reset();  
    }
  }
  
  public async post(): Promise<void> {
    // console.log('test');
    const payload = this.transformPayLoad(this.userProfileForm.value);
    const response = await this.httpService.put('userProfile', payload, false);
    // console.log(response);
    if (this.userProfileForm.get('role.roleName').value === 'ADMIN') {
      this.router.navigate(['/adminLogin']);
    } else {
      this.router.navigate(['/home']);
    }
  }
  private transformPayLoad(payload: any) {
    payload.deliveryRadius = payload.role.roleName === 'BUYER' ? null : payload.deliveryRadius;
    return payload;
  }
}
