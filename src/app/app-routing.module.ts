import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ManageUsersPageComponent } from './manage-users-page/manage-users-page.component';
import { ManageStationsPageComponent } from './manage-stations-page/manage-stations-page.component';
import { RentPageComponent } from './rent-page/rent-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {UserAccountPageComponent} from './user-account-page/user-account-page.component';

const routes: Routes = [
  {path: '' , component: LoginPageComponent},
  {path: 'admin-dashboard' , component: AdminPageComponent},
  {path: 'user-dashboard' , component: UserPageComponent},
  {path: 'manage-users-page', component: ManageUsersPageComponent},
  {path: 'manage-stations-page', component: ManageStationsPageComponent},
  {path: 'rent-page', component: RentPageComponent},
  {path: 'user-account-page', component: UserAccountPageComponent},
  {path: '**' , component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
