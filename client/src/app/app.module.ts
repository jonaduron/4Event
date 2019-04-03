import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventoServiceService } from '../app/services/evento/evento-service.service';
import { DealerComponent } from './components/dealer/dealer.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    DealerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EventoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
