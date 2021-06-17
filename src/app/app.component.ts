
import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'part-supply-front-end';
  isAppLoading: boolean = false;
  @HostListener('click')
  onClick() {
    this.isAppLoading = true;
  }
}
