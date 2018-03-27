import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { UserService } from '../services/userservice';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { AuthGuard }    from '../app/guards/authentication.guard';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
   ],
  providers:  [ UserService,  AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
