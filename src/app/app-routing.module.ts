import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeafletGeosearchComponent } from "src/app/leaflet-geosearch/leaflet-geosearch.component";
import { GoogleMapsComponent } from "src/app/google-maps/google-maps.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
