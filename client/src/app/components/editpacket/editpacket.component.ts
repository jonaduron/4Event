import { Component, OnInit, HostBinding } from '@angular/core';
import {PaqueteServiceService} from '../../services/paquete/paquete-service.service';
import {paquete}from '../../models/paquete';

@Component({
  selector: 'app-editpacket',
  templateUrl: './editpacket.component.html',
  styleUrls: ['./editpacket.component.css']
})
export class EditpacketComponent implements OnInit {
 
  twopac: any=[]
@HostBinding('class')classes= 'row';
pack:paquete={
  id: 0,
  nombre: '',
  precio: 0,
  disponibilidad: 0,
  descripcion: '',
  id_proveedor: 1002
};
  constructor(private paqueteServiceService:PaqueteServiceService) { }
ById:string;
  ngOnInit() {
  }
  getPacketById(){
this.paqueteServiceService.buscarPacket(String(this.pack.id)).subscribe(
  res => {
    this.twopac=res[0];
    console.log(res)
  },
  err => console.error(err)
);

  }
}
