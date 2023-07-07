import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [CitasService]
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
