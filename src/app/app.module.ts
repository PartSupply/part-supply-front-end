import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AboutComponent } from './components/common/about/about.component';
import { ServicesComponent } from './components/common/services/services.component';
import { MakeRequestComponent } from './components/buyer/make-request/make-request.component';
import { RequestInfoComponent } from './components/buyer/request-info/request-info.component';
import { ContactUsComponent } from './components/common/contact-us/contact-us.component';
import { SecondRequestComponent } from './components/buyer/second-request/second-request.component';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { SupplierMenuComponent } from './components/seller/supplier-menu/supplier-menu.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    MakeRequestComponent,
    RequestInfoComponent,
    ContactUsComponent,
    SecondRequestComponent,
    AdminLoginComponent,
    SupplierMenuComponent,
  ],
  imports: [
    SparkAngularModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
