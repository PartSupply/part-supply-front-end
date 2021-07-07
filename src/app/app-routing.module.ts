import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './common/about/about.component';
import { ServicesComponent } from './common/services/services.component';
import { MakeRequestComponent } from './buyer/make-request/make-request.component';
import { RequestInfoComponent } from './buyer/request-info/request-info.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { SecondRequestComponent } from './buyer/second-request/second-request.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { SupplierMenuComponent } from './seller/supplier-menu/supplier-menu.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'signup', component: SignupComponent},
      { path: 'about', component: AboutComponent},
      { path: 'services', component: ServicesComponent},
      { path: 'MakeRequest', component: MakeRequestComponent},
      { path: 'requestInfo', component: RequestInfoComponent},
      { path: 'contactUs', component: ContactUsComponent},
      { path: 'secondRequest', component: SecondRequestComponent},
      { path: 'adminLogin', component: AdminLoginComponent},
      { path: 'supplierMenu', component: SupplierMenuComponent},


    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
