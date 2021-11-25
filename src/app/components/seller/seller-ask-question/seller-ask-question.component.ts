import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-seller-ask-question',
  templateUrl: './seller-ask-question.component.html',
  styleUrls: ['./seller-ask-question.component.css']
})
export class SellerAskQuestionComponent implements OnInit {
  partData: any;

  constructor(public dialog: MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {console.log('Inside', data);
  this.partData = data; }

  ngOnInit() {
  }
  public onNoClick(): void {
    const dialogRef = this.dialog.closeAll();
  }
}
