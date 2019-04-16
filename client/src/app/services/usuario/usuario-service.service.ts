import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cliente} from '../../models/cliente'; 


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  API_URI='http://192.168.137.207:3000';
  constructor(private http:HttpClient) { }

  crearUsuario(usuario: any) {
    return this.http.post(`${this.API_URI}/new`, usuario);
  }

  buscarUsuario(id: string){
    return this.http.get(`${this.API_URI}/customers/details/${id}`);
  }

  editarUsuario(id: string, us: cliente){
    return this.http.put(`${this.API_URI}/customers/details/${id}`, us);
  }

  actualizarContrasena(usuario: string, contrasena: string) {
    return this.http.put(`${this.API_URI}/customers/password/${usuario}`, contrasena);
  }
}
