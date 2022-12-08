import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { CardCreationComponent } from './pages/cards/card-creation.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterstaffComponent } from './pages/registerstaff/registerstaff.component';
import { SavingsaccountComponent } from './pages/savingsaccount/savingsaccount.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { AdminprofileComponent } from './views/adminprofile/adminprofile.component';
import { ProfileComponent } from './views/profile.component';
import { StaffprofileComponent } from './views/staffprofile/staffprofile.component';
import { UserprofileComponent } from './views/userprofile/userprofile.component';

const routes: Routes = [
  { path:'profile', component: ProfileComponent,canActivate:[AuthGuard] },
  { path:'userprofile', component: UserprofileComponent,canActivate:[AuthGuard] },
  { path:'staffprofile', component: StaffprofileComponent,canActivate:[AuthGuard] },
  { path:'adminprofile', component: AdminprofileComponent,canActivate:[AuthGuard] },
  { path:'createSavingsAccount', component:SavingsaccountComponent,canActivate:[AuthGuard]},
  { path: 'Transactions', component:TransactionsComponent,canActivate:[AuthGuard]},
  { path: 'registerstaff', component:RegisterstaffComponent,canActivate:[AuthGuard]},
  // { path:'createCheckingAccount', component:CreateAccountComponent,canActivate:[AuthGuard]},
  { path:'register', component:RegisterComponent},
  { path:'getnewcard', component: CardCreationComponent,canActivate:[AuthGuard]},
  { path:'accountInfo', component:AccountsComponent,canActivate:[AuthGuard] },
  { path:'mainpage', component:MainpageComponent },
  { path:'login', component:LoginComponent },
 //{ path: '', component: IndexComponent ,pathMatch:"full"},
  //{ path: 'register', component: RegisterComponent },
 {path:"**",redirectTo:"mainpage" },
  {path:'', redirectTo:"mainpage" ,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
