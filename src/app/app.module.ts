import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { DetailsComponent } from './components/common/details/details.component';
import { RequestInfoComponent } from './components/buyer/request-info/request-info.component';
import { ContactUsComponent } from './components/common/contact-us/contact-us.component';
import { SecondRequestComponent } from './components/buyer/second-request/second-request.component';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BuyerHeaderComponent } from './components/buyer/buyer-header/buyer-header.component';
import { AuthGuardService} from './auth-guard.service';
import { RoleGuardService } from './role-guard.service';
import { BuyerRequestsComponent } from './components/buyer/buyer-requests/buyer-requests.component';
import { SellerHeaderComponent } from './components/seller/seller-header/seller-header.component';
import { SupplierMenuComponent } from './components/seller/supplier-menu/supplier-menu.component';
import { SeeRequestsComponent } from './components/seller/see-requests/see-requests.component';
import { SeeOfferStatusComponent } from './components/seller/see-offer-status/see-offer-status.component';
import { AdminHeaderComponent } from './components/Admin/admin-header/admin-header.component';
import { SellerPlaceOfferComponent } from './components/seller/seller-place-offer/seller-place-offer.component';
import { BuyerViewOffersComponent } from './components/buyer/buyer-view-offers/buyer-view-offers.component';
import { SellerEditOfferComponent } from './components/seller/seller-edit-offer/seller-edit-offer.component';
import { AcceptOfferComponent } from './components/buyer/accept-offer/accept-offer.component';
import { SellerAskQuestionComponent } from './components/seller/seller-ask-question/seller-ask-question.component';
import { AdminViewApplicationComponent } from './components/Admin/admin-view-application/admin-view-application.component';
import { AdminHomePageComponent } from './components/Admin/admin-home-page/admin-home-page.component';
import { AdminViewOffersComponent } from './components/Admin/admin-view-offers/admin-view-offers.component';
import { AdminViewTransactionsComponent } from './components/Admin/admin-view-transactions/admin-view-transactions.component';
import { AdminViewRequestsComponent } from './components/Admin/admin-view-requests/admin-view-requests.component';
import { CommonModalComponent } from './components/Admin/common-modal/common-modal.component';
import { ShowChatComponent } from './components/buyer/show-chat/show-chat.component';
import { UpdateUserProfileComponentComponent } from './components/common/update-user-profile-component/update-user-profile-component.component';
import { TwoDigitDecimaNumberDirective } from './services/two-digit-decima-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    RequestInfoComponent,
    ContactUsComponent,
    SecondRequestComponent,
    AdminLoginComponent,
    BuyerHeaderComponent,
    BuyerRequestsComponent,
    SellerHeaderComponent,
    SupplierMenuComponent,
    SeeRequestsComponent,
    SeeOfferStatusComponent,
    AdminHeaderComponent,
    SellerPlaceOfferComponent,
    BuyerViewOffersComponent,
    SellerEditOfferComponent,
    AcceptOfferComponent,
    SellerAskQuestionComponent,
    AdminViewApplicationComponent,
    AdminHomePageComponent,
    AdminViewOffersComponent,
    AdminViewTransactionsComponent,
    AdminViewRequestsComponent,
    CommonModalComponent,
    ShowChatComponent,
    UpdateUserProfileComponentComponent,
    TwoDigitDecimaNumberDirective,
  ],
  imports: [
    SparkAngularModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [RoleGuardService],
  bootstrap: [AppComponent],
  entryComponents: [
    SellerEditOfferComponent,
    SellerAskQuestionComponent,
    ShowChatComponent,
  ]
})
export class AppModule {
 }
