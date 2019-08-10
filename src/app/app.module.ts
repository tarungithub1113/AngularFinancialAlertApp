import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertRegistrationComponent } from './alert-registration/alert-registration.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertRegistrationComponent,
    DateComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ TestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
