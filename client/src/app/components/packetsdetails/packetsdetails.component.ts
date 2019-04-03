import { Component, OnInit } from '@angular/core';
import { packetsdetails } from '../../models/packetsdetails';
import { PacketsdetailsServiceService } from '../../services/packetsdetails/packetsdetails-service.service';

@Component({
  selector: 'app-packetsdetails',
  templateUrl: './packetsdetails.component.html',
  styleUrls: ['./packetsdetails.component.css']
})
export class PacketsdetailsComponent implements OnInit {
packetdetails: any =[];
  constructor(private packetsdetailsServiceService:PacketsdetailsServiceService) { }

  ngOnInit() {
    this.packetsdetailsServiceService.getpacketsdetails().subscribe(
res => {
  this.packetdetails=res;
},err=> console.error(err)
    );
  }

}
