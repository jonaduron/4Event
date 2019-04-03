import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventoServiceService } from '../app/services/evento/evento-service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PacketsandeventsComponent } from './components/packetsandevents/packetsandevents.component';
import { PacketandeventServiceService }from './services/packetandevent/packetandevent-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NavbarComponent,
    PacketsandeventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EventoServiceService,
    PacketandeventServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
