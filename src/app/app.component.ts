import { Component, OnInit } from "@angular/core";
import { environment } from "@src/environments/environment";
import * as mapboxgl from "mapbox-gl";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public title = "Frontend";

  /** Llamada Global MapBox */
  public ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }
}
