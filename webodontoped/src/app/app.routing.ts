import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { AboutComponent } from './components/about/about.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesofferComponent } from './components/servicesoffer/servicesoffer.component';
import { DatesComponent } from "./components/dates/dates.component";

const appRoutes: Routes= [
    {path:'home', component: AboutComponent},
    {path:'servicios', component: ServicesofferComponent},
    {path:'agenda-tu-cita', component: ScheduleComponent},
    {path:'contacto', component: ContactComponent},
    {path:'dates', component: DatesComponent},
    {path: '**', component: AboutComponent}
];

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);