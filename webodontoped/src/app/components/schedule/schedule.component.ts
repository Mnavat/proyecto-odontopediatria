import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { CitasService } from 'src/app/services/citas.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [CitasService],
})

export class ScheduleComponent implements OnInit{
  public title: string;
  public cita: Cita;

  constructor(
    private _citaService: CitasService
  ){
    this.title= "Agenda tu cita";
    this.cita= new Cita("","","","","","","","");
  }
  
  ngOnInit(){

  }

  onSubmit(form: any){
    console.log(this.cita);
  }


}
