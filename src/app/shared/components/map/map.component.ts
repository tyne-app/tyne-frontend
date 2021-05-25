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

  constructor() { }

  ngOnInit() {
    const tyneMap = new mapboxgl.Map({
      container: 'TyneMap',
      style: TyneMapStyle,
      center: [this.Long, this.Lat],
      zoom: 18
    });
  }

}
