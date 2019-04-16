import { Component, OnInit, HostBinding } from '@angular/core';
import { cliente} from '../../models/cliente';
import { UsuarioServiceService }from '../../services/usuario/usuario-service.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  use:any=[]
  @HostBinding('class')classes= 'row';
  client:cliente={
    id: 0,
    usuario: '',
    contrasena:'',
    nombre: '',
    apellidos: '',
    telefono: '',
    correo_electronico: '',
    direccion: '',
    tipo:'',
    detalles:'',
    esProveedor:true,
    foto:null
  };
  
  constructor(private usuarioService:UsuarioServiceService) { }

  ngOnInit() {

  }

  gettUser(){
    this.usuarioService.buscarUsuario(String(this.client.id)).subscribe(
      res => {
        this.use=res;
        console.log(res)
        this.client.id = this.use.id
        this.client.usuario = this.use.usuario
        this.client.contrasena = this.use.contrasena
        this.client.nombre = this.use.nombre
        this.client.apellidos = this.use.apellidos
        this.client.telefono = this.use.telefono
        this.client.correo_electronico = this.use.correo_electronico
        this.client.direccion = this.use.direccion
        this.client.tipo = this.use.tipo
        this.client.detalles = this.use.detalles
      },
      err => console.error(err)
      
    );

  }

  editar(){
    console.log(this.client)
    this.usuarioService.editarUsuario(String(this.client.id),this.client).subscribe(

      res=>{
console.log(res)
      },err=> console.log(err)
    );
  }

}
