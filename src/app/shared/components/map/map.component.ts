import { Component, Input, OnInit } from "@angular/core";
import { Branch } from "@app/business/business-details/interfaces/business-details-response";
import * as mapboxgl from "mapbox-gl";
import { TyneMapStyle } from "./constants/map";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  @Input() public Longitude ;
  @Input() public Latitude ;
  @Input() public Address: string = null;
  @Input() public branches: Branch[] = [];

  private tyneMap: mapboxgl.Map;
  private zoom = 14;

  public constructor() {}

  public ngOnInit(): void {
    this.tyneMap = new mapboxgl.Map({
      container: "TyneMap",
      style: TyneMapStyle,
      center: [this.Longitude, this.Latitude],
      zoom: this.zoom,
    });
    this.createMarker(this.Address, this.Latitude, this.Longitude);
    this.tyneMap.addControl(new mapboxgl.NavigationControl());
    this.addMarkersToList();
  }

  private addMarkersToList(): void{
    this.branches.forEach( branch => {
      this.createMarker(branch.street, branch.latitude, branch.longitude);
    });
  }

  private createMarker(address:string, latitude:number, longitude:number): void {
    // https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    })
      .setText(address)
      .addTo(this.tyneMap);

    const marker = new mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat([longitude, latitude])
      .addTo(this.tyneMap)
      .setPopup(popup);

  }
}
