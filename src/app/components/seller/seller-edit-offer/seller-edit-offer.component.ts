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
      partType: new FormControl('', Validators.required),
    }),
  });
}
@Component({
  selector: 'app-seller-edit-offer',
  templateUrl: './seller-edit-offer.component.html',
  styleUrls: ['./seller-edit-offer.component.css']
})
export class SellerEditOfferComponent implements OnInit {
  
  PlaceOfferForm = createNewFormControl();
  bidWarranty: string[] = ['None','30 days','45 days','90 days','6 months','1 year','2 years','3 years','5 years','Limited Life Time'];
  estimatedDeliveryTime: string[] = ['Within an hour','Within 6 hours','Next day','In a week'];
  partData: any;

  constructor(public httpService: HttpService,public dialog: MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log('Inside', data);
    this.partData = data;
    this.PlaceOfferForm.controls['bidAmount'].setValue(this.partData.bid, {onlySelf: true});
    this.PlaceOfferForm.controls['partBrand'].setValue(this.partData.brand, {onlySelf: true});
    this.PlaceOfferForm.controls['bidWarranty'].setValue(this.partData.warranty, {onlySelf: true});
    this.PlaceOfferForm.controls['estDeliveryTime'].setValue(this.partData.estDeliveryTime, {onlySelf: true});
    this.PlaceOfferForm.get('typeOfPart.partType').setValue(this.partData.partType);
  }

  ngOnInit() {
  }
  public async postofferRequest(): Promise<void> {
    const payload = {
      id: this.partData.bidId,
      bidAmount: this.PlaceOfferForm.get('bidAmount').value,
      bidWarranty: this.PlaceOfferForm.get('bidWarranty').value,
      partBrand: this.PlaceOfferForm.get('partBrand').value,
      estDeliveryTime: this.PlaceOfferForm.get('estDeliveryTime').value,
      typeOfPart: this.PlaceOfferForm.get('typeOfPart.partType').value,
      bidStatus: "OPEN",
      partRequest: {
        id: this.partData.partRequestId,
      }
    }
    console.log(payload);
    const response = await this.httpService.put('seller/partBidRequest', payload);
    this.formReset();
    this.onNoClick();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
 
  public formReset() {
    this.PlaceOfferForm = createNewFormControl();
  }
  public onNoClick(): void {
    const dialogRef = this.dialog.closeAll();
  }
}
