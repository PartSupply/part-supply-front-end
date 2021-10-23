import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';

const createNewFormControl = () => {
  return new FormGroup({
    bidAmount: new FormControl('', Validators.required),
    bidWarranty: new FormControl('', Validators.required),
    partBrand: new FormControl('', Validators.required),
    estDeliveryTime: new FormControl('', Validators.required),
    typeOfPart: new FormGroup({
      USED: new FormControl(false),
      NEW: new FormControl(false),
      RE_MANUFACTURED: new FormControl(false),
    }),
  });
}
@Component({
  selector: 'app-seller-place-offer',
  templateUrl: './seller-place-offer.component.html',
  styleUrls: ['./seller-place-offer.component.css']
})
export class SellerPlaceOfferComponent implements OnInit {
  
  PlaceOfferForm = createNewFormControl();
  bidWarranty: string[] = ['None','30 days','45 days','90 days','6 months','1 year','2 years','3 years','5 years','Limited Life Time'];
  estimatedDeliveryTime: string[] = ['Within an hour','Within 6 hours','Next day','In a week'];
  partData: any;

  constructor(public httpService: HttpService,public dialog: MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log('Inside', data);
    this.partData = data;
  }

  ngOnInit() {
  }
  public async postofferRequest(): Promise<void> {
    let partType = 'NEW';
    if (this.PlaceOfferForm.get('typeOfPart.USED').value) {
      partType = 'USED';
    } else if (this.PlaceOfferForm.get('typeOfPart.RE_MANUFACTURED').value) {
      partType = 'RE_MANUFACTURED';
    }
    const payload = {
      bidAmount: this.PlaceOfferForm.get('bidAmount').value,
      bidWarranty: this.PlaceOfferForm.get('bidWarranty').value,
      partBrand: this.PlaceOfferForm.get('partBrand').value,
      estDeliveryTime: this.PlaceOfferForm.get('estDeliveryTime').value,
      typeOfPart: partType,
      bidStatus: "OPEN",
      partRequest: {
        id: this.partData.id,
      }
    }
    const response = await this.httpService.post('seller/partBidRequest', payload);
    this.formReset();
    this.onNoClick();
  }
 
  public formReset() {
    this.PlaceOfferForm = createNewFormControl();
  }
  public onNoClick(): void {
    const dialogRef = this.dialog.closeAll();
  }
}
