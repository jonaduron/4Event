import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { packetandevent } from '../../models/packetandevent';

@Injectable({
  providedIn: 'root'
})
export class PaqueteServiceService {

  API_URI='http://localhost:3000';
  constructor(private Http:HttpClient) { }
  getEvents(){
    return this.Http.get(`${this.API_URI}`);
  }
}
