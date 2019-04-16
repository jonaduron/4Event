import { Component, OnInit, HostBinding } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actualizado',
  templateUrl: './actualizado.component.html',
  styleUrls: ['./actualizado.component.css']
})
export class ActualizadoComponent implements OnInit {
  @HostBinding('class')classes='row';

  constructor(private ri:Router) { }

  ngOnInit() {
  }

  redirigir(){
    this.ri.navigate(['/events'])
  }

}
