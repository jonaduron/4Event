import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { evento } from '../../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  API_URI='http://localhost:3000';

  constructor(private http: HttpClient) { }
  getEvents(){
    return this.http.get(`${this.API_URI}/reports/eventsdetails`);
  }
}
 