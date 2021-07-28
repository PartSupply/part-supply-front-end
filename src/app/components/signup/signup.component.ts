import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
            zipCode: new FormControl('', [Validators.maxLength(5), Validators.minLength(5)]),
            country: new FormControl(null, Validators.required),
          }),
    isMailDeliveryAcceptable: new FormControl(null, Validators.required),
    role: new FormGroup({
              roleName:new FormControl(null, Validators.required),
            }),
    phoneNumber: new FormControl('',[Validators.required, Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]),
    faxNumber: new FormControl('', Validators.required),
    deliveryRadius: new FormControl(null, Validators.required),
  });
  
  deliveryRadius: string[] = ['5miles', '10miles', '20miles', '25miles', 'all'];
  isMailDeliveryAcceptable: string[] = ['Yes' , 'No'];
  state: string[] = ['Michigan'];
  roleName: string[] = ['BUYER', 'SELLER'];
  country: string[] = ['usa'];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
  }

  public post(): void {
    console.log('test');
    const payload = this.transformPayLoad(this.userProfileForm.value);
    this.httpService.post('signup', this.userProfileForm.value).subscribe((success) => {
      console.log('success', success);
      console.log(this.userProfileForm.controls['role'].value.roleName);

    }, (error) => {
      console.log('error', error);
    });
  }

  private transformPayLoad(payload: any) {
    payload.isMailDeliveryAcceptable = payload.isMailDeliveryAcceptable === 'No' ? false : true;
    return payload;
  }
  
}
