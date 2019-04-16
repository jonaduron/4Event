import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { evento } from '../../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  API_URI='http://192.168.137.207:3000';

  constructor(private http: HttpClient) { }
  
  getEvents(){
    return this.http.get(`${this.API_URI}/reports/eventsdetails`);
  }
  newEvent(eve:evento){
    return this.http.post(`${this.API_URI}/events/new`,eve);
  }
  getEvent(id: number) {
    return this.http.get(`${this.API_URI}/events/details/${id}`);
  }
  updateEvent(id: string,par:evento) {
    return this.http.put(`${this.API_URI}/events/details/${id}`,par);
  }
}
 