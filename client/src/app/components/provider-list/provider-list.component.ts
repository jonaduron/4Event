import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/proveedor/provider.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  providers: any = [];

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.providerService.getProviders().subscribe(
      res => {
        this.providers = res;
        console.log(res)
      },
      err => console.error(err)
    );
  }

}
