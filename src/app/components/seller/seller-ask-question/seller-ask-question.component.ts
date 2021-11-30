import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-seller-ask-question',
  templateUrl: './seller-ask-question.component.html',
  styleUrls: ['./seller-ask-question.component.css']
})
export class SellerAskQuestionComponent implements OnInit {
  partData: any;
  userProfile: any;
  questionAnswerResponseData: any;
  questionText: string;
  canBuyerAskQuestion: boolean;

  constructor(
    public dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public httpService: HttpService
  ) {
    console.log('Inside', data);
    this.partData = data.partRequestData;
    this.questionAnswerResponseData = data.questionAnswerResponseData;
    if (this.questionAnswerResponseData.data.length === 0) {
      this.canBuyerAskQuestion = true;
    }
    if (this.questionAnswerResponseData.data.length >= 1) {
      const lastQuestionAnswer = this.questionAnswerResponseData.data[this.questionAnswerResponseData.data.length-1];

      if (lastQuestionAnswer.IS_ANSWER) {
        this.canBuyerAskQuestion = true;
      }
    }

  }

  ngOnInit() {
  }
  public onNoClick(): void {
    const dialogRef = this.dialog.closeAll();
  }

  public async submitQuestion() {
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    const payload = {
      "question": this.questionText,
      "sellerId": this.userProfile.data.id,
      "partRequestId": this.partData.id,
      "isAnswered": false
    }

    const saveQuestionAnswerResponse = await this.httpService.post('seller/postQuestions', payload);
    if (saveQuestionAnswerResponse) {
      console.log('Question Posted successfully');
    }
  }
  
}
