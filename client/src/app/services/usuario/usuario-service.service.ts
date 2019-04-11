import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cliente} from '../../models/cliente'; 


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  API_URI='http://localhost:3000';
  constructor(private http:HttpClient) { }

  buscarUsuario(id:string){
    return this.http.get(`${this.API_URI}/customers/details/${id}`);
  }
}
