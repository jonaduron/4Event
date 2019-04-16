import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacketandeventServiceService {

  API_URI='http://192.168.137.207:3000';
  constructor(private http:HttpClient) { }
  getEvents(){
    return this.http.get(`${this.API_URI}/reports/packetsandevents`);
  }
}