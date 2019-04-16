import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  API_URI='http://192.168.137.207:3000';

 @Output()changer = new EventEmitter();

datos:any;

  constructor(private http:HttpClient) { }

  getLog(user:string){
    this.datos = this.http.get(`${this.API_URI}/login/${user}`); 
    return this.datos;
  }
  
}
