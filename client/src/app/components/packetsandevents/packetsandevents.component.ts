import { Component, OnInit, HostBinding } from '@angular/core';
import { packetandevent } from '../../models/packetandevent';
import { PacketandeventServiceService }from '../../services/packetandevent/packetandevent-service.service';
@Component({
  selector: 'app-packetsandevents',
  templateUrl: './packetsandevents.component.html',
  styleUrls: ['./packetsandevents.component.css']
})
export class PacketsandeventsComponent implements OnInit {
  @HostBinding('class')classes='row';
  packetsandevents:any = [];
  constructor(private packetandeventServiceService:PacketandeventServiceService) { }

  ngOnInit() {
    this.packetandeventServiceService.getEvents().subscribe(

      res => {
        this.packetsandevents = res;
        console.log(res)
      },
      err => console.error(err)
    );
  }

}
