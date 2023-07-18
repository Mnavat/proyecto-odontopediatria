import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesofferComponent } from './components/servicesoffer/servicesoffer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScheduleComponent,
    ContactComponent,
    ServicesofferComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
