import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { CitaService } from 'src/app/services/citas.service';
import { yearsPerPage } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [CitaService],
})

export class ScheduleComponent implements OnInit{
  public title: string;
  public cita: Cita;
  

  constructor(private _citaService: CitaService,
              private router: Router
    ){

    this.title= "Agenda tu cita";//original
    this.cita= new Cita("","","","","","","",""); //original
  }
  
  ngOnInit():void{
    this.obtenerCitas();
  }

  obtenerCitas(){
    this._citaService.getCitas().subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }
  
  minDate= new Date();
  maxDate= new Date(new Date().setMonth(new Date().getMonth()+6));

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Sunday from being selected.
    return day !== 0;
  };

  onSubmit(projectForm: NgForm){
    //Rehaciendo el JSON pra mandarlo a la BD
    const cita:any={
      paciente:this.cita.paciente,
      edad:this.cita.edad,
      nombretutor:this.cita.nombretutor,
      telefono:this.cita.telefono,
      visita:this.cita.visita,
      fecha:this.cita.fecha.toString(),
      hora:this.cita.hora
      };
    this._citaService.guardarCitas(cita).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }

}
