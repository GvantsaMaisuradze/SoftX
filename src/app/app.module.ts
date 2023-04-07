import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePgComponent } from './view/home-pg/home-pg.component';
import { SigninComponent } from './user/signin/signin.component'
import { FormsModule } from '@angular/forms';
import { DetailsPgComponent } from './view/details-pg/details-pg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePgComponent,
    SigninComponent,
    DetailsPgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
