import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
// import {requireCheckboxesToBeCheckedValidator} from './require-checkboxes-to-be-checked.validator';


@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.css']
})

export class RequestInfoComponent implements OnInit {

  vehicleInfoForm = new FormGroup({
    vinNumber: new FormControl('', [Validators.required, Validators.maxLength(17), Validators.minLength(17), Validators.pattern('^[A-Z0-9]{1,17}$')]),
    year: new FormControl(''),
    make: new FormControl(''),
    model: new FormControl(''),
    partName: new FormControl('', Validators.required),
    partType: new FormControl(''),
    // myCheckboxGroup: new FormGroup({
    //   myCheckbox1: new FormControl(false),
    //   myCheckbox2: new FormControl(false),
    //   myCheckbox3: new FormControl(false),
    // }, requireCheckboxesToBeCheckedValidator()),
    
  });
  public shouldDisplayVehicleInfo: boolean = false;
  public vinError: string = '';

  constructor(private httpService: HttpService, private router: Router) { }

  public ngOnInit() {
  }
  val: string = "";
  
  public async onBlurMethod(event: any) {
    let inputValue = event.target.value;
    if (!this.vehicleInfoForm.controls['vinNumber'].valid){
      this.vehicleInfoForm.controls['year'].setValue('');
      this.vehicleInfoForm.controls['make'].setValue('');
      this.vehicleInfoForm.controls['model'].setValue('');
      this.shouldDisplayVehicleInfo = false;
    } else {
      let vinResponse: any = null;
      try {
        vinResponse = await this.httpService.get(`vin-decoder?vinNumber=${inputValue}`);
      } catch (error) {
        console.log(error);
        this.shouldDisplayVehicleInfo = false;
        this.vinError = error.error.message;
        return;  
      }
      this.vehicleInfoForm.controls['year'].setValue(vinResponse.data.vehicleDetail.year);
      this.vehicleInfoForm.controls['make'].setValue(vinResponse.data.vehicleDetail.make);
      this.vehicleInfoForm.controls['model'].setValue(vinResponse.data.vehicleDetail.model);
      this.vinError = '';
      this.shouldDisplayVehicleInfo = true;
    }
  }

  public formReset() {
    this.shouldDisplayVehicleInfo = false;
    this.vehicleInfoForm.reset();

  }
  public async logout(): Promise<void> {
    const response = await this.httpService.post('logout',null);
    // Remove localstorage session info 
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
  public async post(): Promise<void> {
    console.log('test');
    const payload = {
      year: this.vehicleInfoForm.get('year').value,
      make: this.vehicleInfoForm.get('make').value,
      model: this.vehicleInfoForm.get('model').value,
      vinNumber: this.vehicleInfoForm.get('vinNumber').value,
      partName: this.vehicleInfoForm.get('partName').value,
      partType: 'NEW',
      numberOfOffers: 0,
      offerStatus: 'OPEN',
    }
    const response = await this.httpService.post('buyer/submitPartRequest',payload);
    console.log(response);
    
  }
}

 


  
