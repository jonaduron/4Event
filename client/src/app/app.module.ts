import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventoServiceService } from '../app/services/evento/evento-service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PacketsandeventsComponent } from './components/packetsandevents/packetsandevents.component';
import { PacketandeventServiceService }from './services/packetandevent/packetandevent-service.service';
import { PacketsdetailsServiceService} from '../app/services/packetsdetails/packetsdetails-service.service';
import { PacketsdetailsComponent } from './components/packetsdetails/packetsdetails.component';
import { CustomersandprovidersComponent } from './components/customersandproviders/customersandproviders.component';
import { customersandprovidesServiceService }from './services/customersandprovides/customersandprovides-service.service';
import { NewformpacketComponent } from './components/newformpacket/newformpacket.component';
import { EditpacketComponent } from './components/editpacket/editpacket.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NewEventComponent } from './components/new-event/new-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NavbarComponent,
    PacketsandeventsComponent,
    PacketsdetailsComponent,
    CustomersandprovidersComponent,
    NewformpacketComponent,
    EditpacketComponent,
    LogInComponent,
    NewEventComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EventoServiceService,
    PacketandeventServiceService,
    PacketsdetailsServiceService,
    customersandprovidesServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
