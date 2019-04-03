import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from '../app/components/event-list/event-list.component';
import { PacketsandeventsComponent } from '../app/components/packetsandevents/packetsandevents.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/packetsandevents',
    pathMatch:'full'
  },
  {
    path:'events',
    component:EventListComponent
  },
  {
    path:'packetsandevents',
    component:PacketsandeventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
