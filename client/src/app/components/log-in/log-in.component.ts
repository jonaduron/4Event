import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { login } from '../../models/login';
import { LoginServiceService } from '../../services/login/login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
@Injectable()
export class LogInComponent implements OnInit {
 
  pass: any;

  user: login = {
    id: 0,
    usuario: '',
    contrasena: '',
    esProveedor: false
  };

  constructor(private loginService: LoginServiceService, private ruta: Router) { }

  ngOnInit() {
  }

  getLog() {
    this.loginService.getLog(this.user.usuario).subscribe(
      res => {
        this.pass = res;
        console.log(res)
        if (this.pass[0].contrasena == this.user.contrasena) {
          if(this.pass[0].esProveedor == false) {
            this.ruta.navigate(['/providers'])
          }
          else {
            this.ruta.navigate(['/packetsdetails']);
          }
          
        } else {
          
        }
      }
    );
  }
}
