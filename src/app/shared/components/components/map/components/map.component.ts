import { Component, Input, OnInit } from "@angular/core";
import * as mapboxgl from "mapbox-gl";
import { TyneMapStyle } from "../models/map";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  @Input() public Long = -70.66129503199164;
  @Input() public Lat = -33.468330883364935;
  private tyneMap: mapboxgl.Map;

  public constructor() {}

  public ngOnInit(): void {
    this.tyneMap = new mapboxgl.Map({
      container: "TyneMap",
      style: TyneMapStyle,
      center: [this.Long, this.Lat],
      zoom: 14,
    });
    this.createMarker();
    this.tyneMap.addControl(new mapboxgl.NavigationControl());
  }

  private createMarker(): void {
    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([this.Long, this.Lat])
      .addTo(this.tyneMap);
  }
}
