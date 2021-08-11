import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    userProfileForm = new FormGroup({

    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    verifyPassword: new FormControl('', Validators.minLength(8)),
    companyName: new FormControl('',Validators.required),
    address: new FormGroup({
            addressLineOne: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            state: new FormControl(null, Validators.required),
            zipCode: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]{1,6}$')]),
            country: new FormControl(null, Validators.required),
          }),
    isMailDeliveryAcceptable: new FormControl(null, Validators.required),
    role: new FormGroup({
              roleName:new FormControl(null, Validators.required),
            }),
    phoneNumber: new FormControl('',[Validators.required, Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]),
    faxNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{1,10}$')]),
    deliveryRadius: new FormControl(''),
  });
  
  deliveryRadius: string[] = ['5miles', '10miles', '20miles', '25miles', 'all'];
  isMailDeliveryAcceptable: string[] = ['Yes' , 'No'];
  state: string[] = ['Michigan'];
  roleName: string[] = ['BUYER', 'SELLER'];
  country: string[] = ['usa'];
  isEnabled: boolean = false;


  constructor(
    private httpService: HttpService, private router: Router
  ) { }

  ngOnInit() {
  }

  public async post(): Promise<void> {
    console.log('test');
    const payload = this.transformPayLoad(this.userProfileForm.value);
    const response = await this.httpService.post('signup', payload, false);
    console.log(response);
    this.router.navigate(['/home']);
  }

  private transformPayLoad(payload: any) {
    payload.isMailDeliveryAcceptable = payload.isMailDeliveryAcceptable === 'No' ? false : true;
    payload.deliveryRadius = payload.role.roleName === 'BUYER' ? null : payload.deliveryRadius;
    return payload;
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = this.userProfileForm.get('password').value;
    let confirmPass = this.userProfileForm.get('varifyPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }
  public async onBlur(event: any) {
    let inputVal = event.target.value;
    const control = this.userProfileForm.get('deliveryRadius');
    console.log(inputVal);
    if (inputVal === '1: SELLER') {
      document.getElementById('deliveryRadius').style.display = "block";
      if (control) {
        control.setValidators([Validators.required]);
        control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      }
    } else {
      document.getElementById('deliveryRadius').style.display = "none";
      this.userProfileForm.get('deliveryRadius').clearValidators();
      if (control) {
        control.reset();
        control.clearValidators();
        control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      }
    }
    console.log(this.userProfileForm.get('deliveryRadius'));
  }
}
  

