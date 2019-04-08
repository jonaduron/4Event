import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  API_URI='http://localhost:3000';

 @Output()changer = new EventEmitter();

datos:any;

  constructor(private http:HttpClient) { }

  getLog(user:string){
    this.datos = this.http.get(`${this.API_URI}/log/login/${user}`); 
    return this.datos;
     
  }
  
}
