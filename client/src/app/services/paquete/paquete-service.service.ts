import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {paquete} from '../../models/paquete';


@Injectable({
  providedIn: 'root'
})
export class PaqueteServiceService {

  API_URI='http://localhost:3000';
  constructor(private Http:HttpClient) { }
  getEvents(){
    return this.Http.get(`${this.API_URI}`);
  }
  newPacket(pac:paquete){
    return this.Http.post(`${this.API_URI}/packets/new`,pac);
  }

}
