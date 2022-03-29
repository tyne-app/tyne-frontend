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

  /**  Global Call to MapBox */
  public ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }
}
