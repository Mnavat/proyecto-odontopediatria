import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { AboutComponent } from './components/about/about.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesofferComponent } from './components/servicesoffer/servicesoffer.component';
import { DatesComponent } from "./components/dates/dates.component";
import { DatesdetailComponent } from './components/datesdetail/datesdetail.component';

const appRoutes: Routes= [
    {path:'home', component: AboutComponent},
    {path:'servicios', component: ServicesofferComponent},
    {path:'agenda-tu-cita', component: ScheduleComponent},
    {path:'contacto', component: ContactComponent},
    {path:'dates', component: DatesComponent},
    {path:'dates/:id', component: DatesComponent}, //se agrego el /:id
    {path:'datesdetail', component: DatesdetailComponent},
    {path:'datesdetail/:id', component: DatesdetailComponent},
    {path: '**', component: AboutComponent} // se debe checar esto
];

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);