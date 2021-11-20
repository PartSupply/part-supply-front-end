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
  
  EditOfferForm = createNewFormControl();
  bidWarranty: string[] = ['None','30 days','45 days','90 days','6 months','1 year','2 years','3 years','5 years','Limited Life Time'];
  estimatedDeliveryTime: string[] = ['Within an hour','Within 6 hours','Next day','In a week'];
  partData: any;

  constructor(public httpService: HttpService,public dialog: MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log('Inside', data);
    this.partData = data;
    this.EditOfferForm.controls['bidAmount'].setValue(this.partData.bid, {onlySelf: true});
    this.EditOfferForm.controls['partBrand'].setValue(this.partData.brand, {onlySelf: true});
    this.EditOfferForm.controls['bidWarranty'].setValue(this.partData.warranty, {onlySelf: true});
    this.EditOfferForm.controls['estDeliveryTime'].setValue(this.partData.estDeliveryTime, {onlySelf: true});
    this.EditOfferForm.get('typeOfPart.partType').setValue(this.partData.partType);
  }

  ngOnInit() {
  }
  public async postofferRequest(): Promise<void> {
    const payload = {
      id: this.partData.bidId,
      bidAmount: this.EditOfferForm.get('bidAmount').value,
      bidWarranty: this.EditOfferForm.get('bidWarranty').value,
      partBrand: this.EditOfferForm.get('partBrand').value,
      estDeliveryTime: this.EditOfferForm.get('estDeliveryTime').value,
      typeOfPart: this.EditOfferForm.get('typeOfPart.partType').value,
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
    this.EditOfferForm = createNewFormControl();
  }
  public onNoClick(): void {
    const dialogRef = this.dialog.closeAll();
  }
}
