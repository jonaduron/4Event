import { Component, OnInit, HostBinding } from '@angular/core';
import { EventoServiceService } from '../../services/evento/evento-service.service';
import { evento } from 'src/app/models/evento';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
@HostBinding('class')classes='row';
  events:any = [];
  
  evento: any = {
    id: '',
    fecha: new Date(),
    tipo: '',
    estado: '',
    id_proveedor: 0,
    id_cliente: 0,
    id_paquete: 0
  }

  constructor(private eventoServiceService: EventoServiceService) { }

  ngOnInit() {
    this.eventoServiceService.getEvents().subscribe(
      res => {
        this.events = res;
        console.log(res)
      },
      err => console.error(err)
    );
  }

  getAndUpdateEvent(id: number) {
    this.eventoServiceService.getEvent(id)
      .subscribe(
        res => {
          this.evento = res;
          this.evento.estado = 'Pagado';
          this.eventoServiceService.updateEvent(id, this.evento);
        }
      )
  }


}
