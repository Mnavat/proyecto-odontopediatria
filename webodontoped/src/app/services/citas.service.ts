import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cita } from "../models/cita";
import { Global } from "./global";

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

    testService(){
    return "Probando el servicio de Angular";
    }


}
