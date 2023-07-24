import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { CitaService } from 'src/app/services/citas.service';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
  providers: [CitaService],
})
export class DatesComponent implements OnInit {
  public title: string; //public cita: Cita;
  listCitas: Cita[] = []; //variable para hacer el for en html
  id: string | null; // variable del id dada por el url
  public citaForm: FormGroup; //para rellenar el fomulario al momento de leer el url
  abr: boolean;

  constructor(
    private fb: FormBuilder, //para usar FormGroup
    private _citaService: CitaService,
    private router: Router,
    private aRouter: ActivatedRoute //Para poder leer la ruta
  ){
    this.title= "Citas agendadas";//original
    this.citaForm=this.fb.group({
      paciente: [],
      edad: [],
      nombretutor:[], 
      telefono: [],
      visita: [],
      fecha: [],
      hora: []
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')//Obtener el id del url y ponerlo en var
    console.log(this.id);
    this.abr=false;
    //this.router.events.subscribe((event: Event) => {
    //  if (event instanceof NavigationEnd) {
    //   this.editarCita()//do something on end activity
    //}
    //});
  }

  ngOnInit(): void {
    this.id = null;
    this.obtenerCitas(); //Se inicia el obtenerCitas desde que se inicia el menu
  }

  obtenerCitas(){ 
    this._citaService.getCitas().subscribe({ //hara el metodo get donde metera todas las citas guardadas
      next: response => this.listCitas=response,
      error: error => console.log(error)
    });
  }

  editarCita(){
    this.id = this.aRouter.snapshot.paramMap.get('id')//Obtener el id del url y ponerlo en var
    if (this.id !== null && !undefined){
      this.abr=true;
      console.log(this.id)
      this._citaService.obtenerCita(this.id).subscribe( data=>{
          //error: error => console.log(error)
        //})
        this.citaForm.setValue({
        paciente: data.paciente,
        edad: data.edad, 
        nombretutor: data.nombretutor, 
        telefono: data.telefono,
        visita: data.visita,
        fecha: data.fecha,
        hora: data.hora
        });
      }) 
    }
  }

  eliminarCita(){
    if (this.id !== null && !undefined){
      console.log(this.id);
      this._citaService.eliminarCita(this.id).subscribe(data=>{
      //this._citaService.getCitas();
    }); //error =>{
    //  console.log(error);
    //} )
    //next: response => this.obtenerCitas(this.id),
    //error: error => console.log(error)
  //});
   }
   alert("Cita eliminada");
   this.obtenerCitas();
   
 }
 actualizarCita(){
  let CITA: any ={
      paciente: this.citaForm.get('paciente')?.value,
      edad: this.citaForm.get('edad')?.value, 
      nombretutor: this.citaForm.get('nombretutor')?.value, 
      telefono: this.citaForm.get('telefono')?.value,
      visita: this.citaForm.get('visita')?.value,
      fecha: this.citaForm.get('fecha')?.value,
      hora: this.citaForm.get('hora')?.value,
      };
    console.log(CITA);
  
    if(this.id !==null){
      this._citaService.editarCita(this.id, CITA).subscribe(data =>{
        
      })
    }
    alert("Cita actualizada");
    this.obtenerCitas();

  }

}