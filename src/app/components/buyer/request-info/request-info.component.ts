import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.css']
})
export class RequestInfoComponent implements OnInit {

  vehicleInfoForm = new FormGroup({
    VINnumber: new FormControl('', [Validators.required, Validators.maxLength(17), Validators.minLength(17), Validators.pattern('^[A-Z0-9]{1,17}$')]),
    year: new FormControl(''),
    make: new FormControl(''),
    model: new FormControl(''),
    partName: new FormControl('', Validators.required),
    partType: new FormControl('', Validators.required),
});

  constructor() { }

  ngOnInit() {
  }
  
 
}
async function getVin( query: object ): Promise<object> {
  const url = new URL("https://vin-decoder7.p.rapidapi.com/vin?vin=Jn8AS5MTXBW565232");
  //url.search = new URLSearchParams( query ).toString();
  const headers = {
    
          'x-rapidapi-key': 'd6110475d9msh44a7d3aa9f4f36dp1ace69jsneb8463f67236',//Add the key you got from above here- this is my key
   'x-rapidapi-host': 'vin-decoder7.p.rapidapi.com' //add the host name from above here
  };
  const response = await fetch( url.toString(), {headers} );
  return await response.json();
}
const query = {
  vin: "Jn8AS5MTXBW565232",
};
(async () => {
  const data = await getVin( query );
  console.log(data)
})()
