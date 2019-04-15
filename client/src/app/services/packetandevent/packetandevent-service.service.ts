import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacketandeventServiceService {

  API_URI='http://localhost:3000';
  constructor(private http:HttpClient) { }
  getEvents(){
    return this.http.get(`${this.API_URI}/reports/packetsandevents`);
  }
}