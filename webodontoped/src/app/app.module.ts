import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesofferComponent } from './components/servicesoffer/servicesoffer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScheduleComponent,
    ContactComponent,
    ServicesofferComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
