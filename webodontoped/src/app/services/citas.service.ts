import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cita } from "../models/cita";
import { Global } from "./global";

@Injectable()
export class CitasService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return "Probando el servicio de Angular";
    }


}
