import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

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
    partType: new FormControl('', Validators.required),
  });

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }
  val: string = "";
  
  async onBlurMethod(event: any){
    let inputValue = (this.val = event.target.value);
    console.log(inputValue);
    
    if ((inputValue.invalid)){
      console.log("Please provide correct VIN number");
    
    }else{
      // call api here
      const vinResponse = await this.httpService.get(`vin-decoder?vinNumber=${inputValue}`);
      console.log(vinResponse);
    }
  }   
}
 


  
