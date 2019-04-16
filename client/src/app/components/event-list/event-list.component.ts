import { Component, OnInit, HostBinding } from '@angular/core';
import { EventoServiceService } from '../../services/evento/evento-service.service';
import { evento } from 'src/app/models/evento';
import { Router} from '@angular/router'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
@HostBinding('class')classes='row';
  events:any = [];
  pagado:evento={
    id: 0,
    estado:'Pagado',
    fecha: new Date,
    tipo: '',
    id_proveedor: 0,
    id_cliente: 0,
    id_paquete:0
  }
  evento: any = {
    estado: 'Pagado',
  }

  constructor(private eventoServiceService: EventoServiceService, private ruta: Router) { }

  ngOnInit() {
    this.eventoServiceService.getEvents().subscribe(
      res => {
        this.events = res;
        console.log(res)
      },
      err => console.error(err)
    );
  }

  getAndUpdateEvent(id:string) {
   delete this.pagado.id,
   delete this.pagado.id_cliente,
   delete this.pagado.id_paquete,
   delete this.pagado.id_proveedor,
   delete this.pagado.tipo,
   delete this.pagado.fecha,
   delete this.pagado.descripcion,
  this.eventoServiceService.updateEvent(id,this.evento).subscribe(
    res=>{
      console.log(res)
      this.ruta.navigate(['/act'])
      
            },err=> console.log(err)

  );
             
  }


}
