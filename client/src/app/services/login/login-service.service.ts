import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getLog(user:string){
    return this.http.get(`${this.API_URI}/log/login/${user}`);
  }
}
