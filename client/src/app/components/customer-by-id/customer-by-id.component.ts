import { Component, OnInit, HostBinding } from '@angular/core';
import {cliente} from '../../models/cliente';

@Component({
  selector: 'app-customer-by-id',
  templateUrl: './customer-by-id.component.html',
  styleUrls: ['./customer-by-id.component.css']
})
export class CustomerByIdComponent implements OnInit {
  customer: any =[];
  @HostBinding('class')classes= 'row';
  cliente:cliente={
    //cambiar por valores
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string;
    telefono: string;
    correo_electronico: string;
    direccion: string;
    foto?: File;
    usuario: string;
  };
  constructor() { }

  ngOnInit() {
  }

}
