import { Component, Input, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { TyneMapStyle } from '../../constants/map';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // **Default Values */
  @Input() Long = -70.66129503199164;
  @Input() Lat  = -33.468330883364935;
  tyneMap : mapboxgl.Map; 

  constructor() { }

  ngOnInit() {
    this.tyneMap  = new mapboxgl.Map({
      container: 'TyneMap',
      style: TyneMapStyle,
      center: [this.Long, this.Lat],
      zoom: 14,
      
    });
    this.createMarker();
  }

  createMarker(): void{
    const marker = new mapboxgl.Marker({
      draggable: true
    }).setLngLat([this.Long, this.Lat])
    .addTo(this.tyneMap)
  }
}
