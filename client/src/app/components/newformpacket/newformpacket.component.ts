import { Component, OnInit, HostBinding } from '@angular/core';
import { paquete }from '../../models/paquete'; 
import { PaqueteServiceService } from '../../services/paquete/paquete-service.service';

@Component({
  selector: 'app-newformpacket',
  templateUrl: './newformpacket.component.html',
  styleUrls: ['./newformpacket.component.css']
})
export class NewformpacketComponent implements OnInit {
@HostBinding('class')classes ='row';
  pac: paquete = {
    id: 0,
    nombre: '',
    precio: 0,
    disponibilidad: 0,
    descripcion: '',
    id_proveedor: 1000001
  };
  constructor(private paqueteServiceService:PaqueteServiceService) { }

  ngOnInit() {
  }
  newpackets(){
    // delete this.pac.id_proveedor;
    delete this.pac.id;
    this.paqueteServiceService.newPacket(this.pac).subscribe(
      res=> {
        console.log(res)

      },err=> console.error(err)
    )
  }

}
