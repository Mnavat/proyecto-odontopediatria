import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { CitaService } from 'src/app/services/citas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
  providers: [CitaService],
})
export class DatesComponent implements OnInit {
  public title: string;
  public cita: Cita;
  listCitas: Cita[] = [];

  constructor(
    private _citaService: CitaService,
    private router: Router
  ){
    this.title= "Citas agendadas";//original
    this.cita= new Cita("","","","","","","",""); //original

  }

  ngOnInit(): void {
    this.obtenerCitas()
  }

  obtenerCitas(){
    this._citaService.getCitas().subscribe({
      next: response => this.listCitas=response,
      error: error => console.log(error)
    });
  }

}
