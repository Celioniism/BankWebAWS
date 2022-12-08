import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { HeadComponent } from './Navbar/head/head.component';
import { UserprofileComponent } from './views/userprofile/userprofile.component';
import { StaffprofileComponent } from './views/staffprofile/staffprofile.component';
import { AdminprofileComponent } from './views/adminprofile/adminprofile.component';
import { ProfileComponent } from './views/profile.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { AuthService } from './pages/auth/auth.service';
import { PanelBoxComponent } from './pages/auth/panel-box/panel-box.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { FooterComponent } from './Navbar/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CardCreationComponent } from './pages/cards/card-creation.component';
import { SavingsaccountComponent } from './pages/savingsaccount/savingsaccount.component';
import { ReplacePipe } from './pipes/returnpipe.config';
import { EditcardsComponent } from './pages/editcards/editcards.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterstaffComponent } from './pages/registerstaff/registerstaff.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserLocal } from './Local/user-local/userLocal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadComponent,
    UserprofileComponent,
    StaffprofileComponent,
    AdminprofileComponent,
    LoginComponent,
    ProfileComponent,
    AccountsComponent,
    MainpageComponent,
    PanelBoxComponent,
    RegisterstaffComponent,
    FooterComponent,
    CardCreationComponent,
    SavingsaccountComponent,
    ReplacePipe,
    EditcardsComponent,
    TransactionsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserLocal,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
