// Angular
import { Component, OnInit } from '@angular/core';
// Leaflet
import * as L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-leaflet-geosearch',
  templateUrl: './leaflet-geosearch.component.html',
  styleUrls: ['./leaflet-geosearch.component.css']
})
export class LeafletGeosearchComponent implements OnInit {
  public location: any = {
    x: 105.780128,
    y: 21.029356,
    label: '15 Phạm Hùng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội'
  };

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  public initMap(): void {
    // refresh map id
    document.getElementById(
      "contain-map"
    ).innerHTML = `<div id='map' style='width: 100%; height: 100%;'></div>`;
    // init map
    const map = L.map("map", {
      // Set latitude and longitude of the map center (required)
      center: [this.location.y, this.location.x],
      // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
      zoom: 16
    });
    // add icon
    L.icon({
      iconUrl: "assets/images/marker-icon.png",
      // shadowUrl: 'assets/images/icons/Blank.png',
      iconSize: [25, 41], // size of the icon
      // shadowSize:   [50, 64], // size of the shadow
      iconAnchor: [9, 40], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });
    L.control.scale().addTo(map);
    // Create a Tile Layer and add it to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright"></a> contributors'
    }).addTo(map);

    // add search control https://github.com/smeijer/leaflet-geosearch
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider: provider,
      autoClose: true
    });
    map.addControl(searchControl);

    // popover marker
    let marker = L.marker([this.location.y, this.location.x])
      .addTo(map)
      .bindPopup(this.location.label)
      .openPopup();

    // handler event search
    map.on("geosearch/showlocation", e => {
      if (marker) {
        // check
        map.removeLayer(marker); // remove
      }
      this.location = {
        x: e.location.x,
        y: e.location.y,
        label: e.location.label
      };
      marker = new L.Marker([this.location.y, this.location.x])
        .addTo(map)
        .bindPopup(this.location.label)
        .openPopup();
    });
  }

}
