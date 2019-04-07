import { Component, OnInit, HostBinding } from '@angular/core';
import { login } from '../../models/login';
import { LoginServiceService } from '../../services/login/login-service.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  pass:any;
  user: login={
    usuario:'',
    contrasena:''
  };
  constructor(private log:LoginServiceService, private ruta:Router) { }

  ngOnInit() {
  }

  getLog(){
this.log.getLog(this.user.usuario).subscribe(
res=>{
this.pass=res;
console.log(this.pass)
  // if(this.pass == this.user.contrasena){
  //   this.ruta.navigate(['/packetsdetails'])
  // }
}
);
  }

}
