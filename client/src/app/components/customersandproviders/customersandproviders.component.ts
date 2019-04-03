import { Component, OnInit } from '@angular/core';
import { customersandproviders }from '../../models/customersandproviders'; 
import { customersandprovidesServiceService } from '../../services/customersandprovides/customersandprovides-service.service';

@Component({
  selector: 'app-customersandproviders',
  templateUrl: './customersandproviders.component.html',
  styleUrls: ['./customersandproviders.component.css']
})
export class CustomersandprovidersComponent implements OnInit {
  customersandprovides:any=[];
  constructor(private customersandprovidesServiceService:customersandprovidesServiceService) { }

  ngOnInit() {
    this.customersandprovidesServiceService.getcustomersandprovides().subscribe(
      res =>{

        this.customersandprovides = res;
      },err => console.error(err)

    );
  }

}
