import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { DetailsComponent } from './components/common/details/details.component';
import { MakeRequestComponent } from './components/buyer/make-request/make-request.component';
import { RequestInfoComponent } from './components/buyer/request-info/request-info.component';
import { ContactUsComponent } from './components/common/contact-us/contact-us.component';
import { SecondRequestComponent } from './components/buyer/second-request/second-request.component';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { RoleGuardService as RoleGuard } from './role-guard.service';
import { BuyerRequestsComponent } from './components/buyer/buyer-requests/buyer-requests.component';
import { SupplierMenuComponent } from './components/seller/supplier-menu/supplier-menu.component';
import { SeeRequestsComponent } from './components/seller/see-requests/see-requests.component';
import { SeeOfferStatusComponent } from './components/seller/see-offer-status/see-offer-status.component';
import { SellerPlaceOfferComponent } from './components/seller/seller-place-offer/seller-place-offer.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'signup', component: SignupComponent},
      { path: 'details', component: DetailsComponent},
      { path: 'MakeRequest', component: MakeRequestComponent},
      { path: 'requestInfo', component: RequestInfoComponent, canActivate: [RoleGuard, AuthGuard], 
      data: { 
        expectedRole: 'BUYER'
      }}, // only for buyer
      { path: 'secondPartRequest', component: SecondRequestComponent, canActivate: [RoleGuard, AuthGuard],
     data:{
       expectedRole: 'BUYER'
     }},
      { path: 'contactUs', component: ContactUsComponent},
      { path: 'secondRequest', component: SecondRequestComponent},
      { path: 'adminLogin', component: AdminLoginComponent},
      { path: 'supplierMenu', component: SupplierMenuComponent, canActivate: [RoleGuard, AuthGuard], 
      data: { 
        expectedRole: 'SELLER'
      } 
      },
      { path: 'buyerRequestList', component: BuyerRequestsComponent, canActivate: [RoleGuard, AuthGuard],
      data: {
        expectedRole: 'BUYER'
      }
    },
    { path: 'seeAllRequests', component: SeeRequestsComponent, canActivate: [RoleGuard, AuthGuard],
      data:{
        expectedRole: 'SELLER'
      }
    },
    { path: 'seeOfferStatus', component: SeeOfferStatusComponent, canActivate: [RoleGuard, AuthGuard],
      data:{
        expectedRole: 'SELLER'
      }
    },
    { path: 'placeOffer', component: SellerPlaceOfferComponent, canActivate: [RoleGuard, AuthGuard],
      data:{
        expectedRole: 'SELLER'
      }
    },
      //canActivate: [AuthGuard]


    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
