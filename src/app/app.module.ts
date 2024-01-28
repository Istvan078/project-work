import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { Environments } from './environments';

import {  NgbTooltipConfig, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NotesComponent } from './components/notes/notes.component';
import { SignupComponent } from './components/signup/signup.component';
import { ClassPipe } from './pipes/class.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { WeatherComponent } from './components/weather/weather.component';
//  import { AuthInterceptorService } from './services/auth-interceptor.service';
 import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { SharedModule } from './components/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NotesComponent,
    SignupComponent,
    ClassPipe,
    LoginComponent,
    UsersComponent,
    WeatherComponent,
    LoadingSpinnerComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(Environments.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    
    SharedModule,

    NgbTooltipModule,
    
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS,
    //  useClass: AuthInterceptorService, 
    //  multi: true},
     {provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService, 
      multi: true},
      NgbTooltipConfig,
    ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
