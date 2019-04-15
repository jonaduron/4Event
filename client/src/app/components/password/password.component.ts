import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../services/usuario/usuario-service.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  usuario: string;
  contrasena: string;

  constructor(private usuarioService: UsuarioServiceService) { }

  ngOnInit() {
  }

  actualizarPassword() {
    this.usuarioService.actualizarContrasena(this.usuario, this.contrasena)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.error(err)
      )
  }


}
