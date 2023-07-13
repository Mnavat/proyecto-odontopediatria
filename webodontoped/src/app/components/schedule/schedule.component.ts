import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { CitasService } from 'src/app/services/citas.service';
import { yearsPerPage } from '@angular/material/datepicker';

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
  
  minDate= new Date();
  maxDate= new Date(new Date().setMonth(new Date().getMonth()+6));

  //weekDayFilter(date:any){
    //const dia = date.getDay();
    //return dia !=0 
  //}

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Sunday from being selected.
    return day !== 0;
  };

  onSubmit(form: any){
    console.log(this.cita);
  }


}
