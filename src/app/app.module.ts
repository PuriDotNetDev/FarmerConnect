import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { UserService } from '../services/userservice';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RestangularModule } from 'ng2-restangular';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
   ],
  providers:  [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
