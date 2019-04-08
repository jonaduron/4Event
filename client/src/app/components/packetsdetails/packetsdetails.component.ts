import { Component, OnInit, HostBinding } from '@angular/core';
import { PacketsdetailsServiceService } from '../../services/packetsdetails/packetsdetails-service.service';


@Component({
  selector: 'app-packetsdetails',
  templateUrl: './packetsdetails.component.html',
  styleUrls: ['./packetsdetails.component.css']
})
export class PacketsdetailsComponent implements OnInit {
  @HostBinding('class') classes = 'row';
packetdetails: any =[];
  constructor(private packetsdetailsServiceService:PacketsdetailsServiceService) { }

  ngOnInit() {
  this.getpackets();
  }

  getpackets(){
    this.packetsdetailsServiceService.getpacketsdetails().subscribe(
      res => {
        this.packetdetails=res;
        console.log(res)
      },err=> console.error(err)
          );
  }
  deletePacket(id: String){
    this.packetsdetailsServiceService.deletePacket(id).subscribe(
res =>{
  console.log(res)
 
},
err => console.error(err)
    )
    
  }

}
