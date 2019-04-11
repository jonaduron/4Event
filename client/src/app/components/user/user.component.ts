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
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    correo_electronico: '',
    direccion: '',
    foto: null,
    usuario: '',
  };
  constructor(private usuarioService:UsuarioServiceService) { }

  ngOnInit() {

  }

  gettUser(){
    this.usuarioService.buscarUsuario(String(this.client.id)).subscribe(
      res => {
        this.use=res[0];
        console.log(res)
      },
      err => console.error(err)
      
    );

  }

}
