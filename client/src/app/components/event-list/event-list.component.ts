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
    estado: '',
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
    this.evento.estado = 'Pagado';
    this.eventoServiceService.updateEvent(this.events[0].id, this.evento)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
             
  }


}
