import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../services/usuario/usuario-service.service';
import { cliente } from '../../models/cliente';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  cliente: cliente = {
      id: 0,
      usuario: '',
      contrasena: '',
      nombre: '',
      apellidos: '',
      telefono: '',
      correo_electronico: '',
      direccion: '',
      tipo: 'Cliente',
      detalles: '',
      esProveedor: false
  }

  constructor(private usuarioService: UsuarioServiceService) { }

  ngOnInit() {

  }

  crearUsuario() {
    delete this.cliente.id;

    this.usuarioService.crearUsuario(this.cliente).subscribe(
      res => {
        console.log(res)
      },
        err => console.error(err)
    );
  }

}
