import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {paquete} from '../../models/paquete';


@Injectable({
  providedIn: 'root'
})
export class PaqueteServiceService {
  
  API_URI='http://192.168.137.207:3000';
  constructor(private Http:HttpClient) { }
  getEvents(){
    return this.Http.get(`${this.API_URI}`);
  }
  newPacket(pac:paquete){
    return this.Http.post(`${this.API_URI}/packets/new`,pac);
  }
  buscarPacket(id:string){
    return this.Http.get(`${this.API_URI}/packets/details/${id}`);
  }

}
