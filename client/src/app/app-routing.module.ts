import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from '../app/components/event-list/event-list.component';
import { PacketsandeventsComponent } from '../app/components/packetsandevents/packetsandevents.component';
import { PacketsdetailsComponent } from '../app/components/packetsdetails/packetsdetails.component';
import { CustomersandprovidersComponent } from '../app/components/customersandproviders/customersandproviders.component';
import { NewformpacketComponent } from '../app/components/newformpacket/newformpacket.component';
import { EditpacketComponent } from '../app/components/editpacket/editpacket.component';
import { LogInComponent } from '../app/components/log-in/log-in.component';
import { NewEventComponent} from '../app/components/new-event/new-event.component';
import { UserComponent} from '../app/components/user/user.component'; 
import { NewCustomerComponent } from '../app/components/new-customer/new-customer.component';
import { ProviderListComponent } from '../app/components/provider-list/provider-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
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
    path:'packet/new',
    component:NewformpacketComponent
  },
  {
    path:'packet/edit',
    component:EditpacketComponent
  },
  {
    path:'login',
    component:LogInComponent
  },
  {
    path:'event/new',
    component:NewEventComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path: 'new',
    component: UserComponent
  },
  {
    path: 'customer/edit',
    component: UserComponent
  },
  {
    path: 'providers',
    component: ProviderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
