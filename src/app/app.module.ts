import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { LeafletGeosearchComponent } from './leaflet-geosearch/leaflet-geosearch.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    LeafletGeosearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
