import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/common/about/about.component';
import { ServicesComponent } from './components/common/services/services.component';
import { MakeRequestComponent } from './components/buyer/make-request/make-request.component';
import { RequestInfoComponent } from './components/buyer/request-info/request-info.component';
import { ContactUsComponent } from './components/common/contact-us/contact-us.component';
import { SecondRequestComponent } from './components/buyer/second-request/second-request.component';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { SupplierMenuComponent } from './components/seller/supplier-menu/supplier-menu.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '',redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
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
