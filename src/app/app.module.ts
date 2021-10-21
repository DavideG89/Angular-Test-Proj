import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
