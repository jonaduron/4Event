import { Component, OnInit, HostBinding, Injectable, Output, EventEmitter } from '@angular/core';
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
    usuario: '',
    contrasena: ''
  };
  @Output() change = new EventEmitter();

  constructor(private log: LoginServiceService, private ruta: Router) { }

  ngOnInit() {
  }


  getLog() {
    this.log.getLog(this.user.usuario).subscribe(
      res => {
        this.pass = res;


        if (this.pass[0].contrasena == this.user.contrasena) {
          this.ruta.navigate(['/packetsdetails'])

        } else {

        }
      }
    );
    
  }

}
