import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-show-chat',
  templateUrl: './show-chat.component.html',
  styleUrls: ['./show-chat.component.css']
})
export class ShowChatComponent implements OnInit {
  chatData: any[];
  shouldDisplayChat: boolean = true;
  answerText: string;
  canBuyerAskQuestion: boolean;
  selectedChatData: any;
  chatResponse: any[];
  constructor(private httpService: HttpService, public dialog: MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.chatData = data;
  }

  ngOnInit() {
  }
  
  async showChat(data: any) {
    console.log(data)
    this.selectedChatData = data;
    this.shouldDisplayChat = false;
    const payLoad = {
      "sellerId": data.sellerId,
      "partRequestId": data.partRequestId,
    };
    const response: any = await this.httpService.post('buyer/questionAnswer', payLoad);
    this.chatResponse = response.data;

    if (this.chatResponse.length >= 1) {
      const lastQuestionAnswer = this.chatResponse[this.chatResponse.length-1];

      if (!lastQuestionAnswer.IS_ANSWER) {
        this.canBuyerAskQuestion = true;
      }
    }
  }
  async submitAnswer() {
    if (this.answerText.trim() === '') {
      return;
    }
    const payload = {
      "id": this.chatResponse[this.chatResponse.length-1].ID,
      "answer": this.answerText.trim(),
    }

    const saveQuestionAnswerResponse = await this.httpService.post('buyer/postAnswer', payload);
    if (saveQuestionAnswerResponse) {
      console.log('Answer Posted successfully');
    }
    const dialogRef = this.dialog.closeAll();
  }
  formReset() {
    this.answerText = '';
  }
  onNoClick() {
    const dialogRef = this.dialog.closeAll();
  }
}
