import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {
  

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  public async post(): Promise<void> {
    const response = await this.httpService.post('logout',null);
  }
  
}
