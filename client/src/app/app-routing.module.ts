import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from '../app/components/event-list/event-list.component';
import { PacketsandeventsComponent } from '../app/components/packetsandevents/packetsandevents.component';
import { PacketsdetailsComponent } from '../app/components/packetsdetails/packetsdetails.component';
import { CustomersandprovidersComponent } from '../app/components/customersandproviders/customersandproviders.component';
import { NewformpacketComponent } from '../app/components/newformpacket/newformpacket.component';
import { EditpacketComponent } from '../app/components/editpacket/editpacket.component';
import { CustomerByIdComponent } from '../app/components/customer-by-id/customer-by-id.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/customerById',
    pathMatch:'full'
  },
  {
    path:'events',
    component:EventListComponent
  },
  {
    path:'packetsandevents',
    component:PacketsandeventsComponent
  },
  {
    path:'packetsdetails',
    component:PacketsdetailsComponent
  },
  {
    path:'customerandproviders',
    component:CustomersandprovidersComponent
  },
  {
    path:'newpacket',
    component:NewformpacketComponent
  },
  {
    path:'editpacket',
    component:EditpacketComponent
  },
  {
    path:'customerById',
    component:CustomerByIdComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
