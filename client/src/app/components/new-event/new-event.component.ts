import { Component, OnInit, HostBinding } from '@angular/core';
import { evento }from '../../models/evento';
import { EventoServiceService} from '../../services/evento/evento-service.service'

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  @HostBinding('class')classes ='row';
  even:evento={
    id: 0,
    fecha: new Date("2019-04-07"),
    descripcion: '',
    tipo: '',
    estado: 'Pendiente',
    id_proveedor: 1002,
    id_cliente:1000,
    id_paquete: 1000
  };
  
  constructor(private eventoServicioServicio:EventoServiceService) { }
  
  ngOnInit() {
  }
  newEvent(){
    delete this.even.id,
    delete this.even.descripcion,
    this.eventoServicioServicio.newEvent(this.even).subscribe(
      res=> {
        console.log(res)

      },err=> console.error(err)
    );
  }

}
