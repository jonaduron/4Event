import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { PacketsdetailsServiceService } from '../../services/packetsdetails/packetsdetails-service.service';
import * as jsPDF from 'jspdf';

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
@ViewChild('report') report: ElementRef;
  download(){
    let doc = new jsPDF;
    let specialElemetnHandlers = {
      '#editor': function(element, renderer ){
        return true;
      }
    };
    let report = this.report.nativeElement;
    doc.fromHTML( report.innerHTML,15,15, {
      'width': 190,
      'elementHandlers': specialElemetnHandlers
    });
    doc.save('testi.pdf');
  }

}
