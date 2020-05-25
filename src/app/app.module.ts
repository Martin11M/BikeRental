import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    UserPageComponent,
    PageNotFoundComponent,
    NavbarComponent,
    OpenStreetMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
