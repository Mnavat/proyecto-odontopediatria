import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cita } from "../models/cita";

@Injectable({
    providedIn: 'root'
})
export class CitaService{
    url= 'http://localhost:4000/api/citas' ;

    constructor(private http: HttpClient){
        //this.url = Global.url;
    }

    getCitas(): Observable<any>{ //ruta para get
        return this.http.get(this.url);
    }

    guardarCitas(cita: Cita): Observable<any> { ///ruta parapost
        return this.http.post(this.url, cita);
    }

    obtenerCita(id: string): Observable<any>{//ruta para get desde el url
        return this.http.get(this.url + '/' + id); //se tuvo que añadir la / para poder definir bien el url
    }

    obtenerCita1(): Observable<any>{//ruta para get desde el url
        return this.http.get(this.url); //se tuvo que añadir la / para poder definir bien el url
    }


    eliminarCita(id: string): Observable<any>{ //ruta para delete desde el url
        return this.http.delete(this.url + '/' + id); // se debe agregar el /
    }

    editarCita(id: string, paciente:string): Observable<any>{ //para el metodo put
        return this.http.put(this.url + '/' + id, paciente); // se debe agregar el /
    }

    testService(){
    return "Probando el servicio de Angular";
    }


}
