import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutComponent } from './common/about/about.component';
import { ServicesComponent } from './common/services/services.component';
import { MakeRequestComponent } from './buyer/make-request/make-request.component';
import { RequestInfoComponent } from './buyer/request-info/request-info.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { SecondRequestComponent } from './buyer/second-request/second-request.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { SupplierMenuComponent } from './seller/supplier-menu/supplier-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
