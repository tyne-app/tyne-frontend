import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { environment } from "@src/environments/environment";
import * as mapboxgl from "mapbox-gl";
// eslint-disable-next-line @typescript-eslint/ban-types
declare let fbq: Function;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public title = "Frontend";

  public constructor(private router: Router) {
    router.events.subscribe((y: NavigationEnd) => {
      if (y instanceof NavigationEnd) {
        fbq("track", "PageView");
      }
    });
  }

  public ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }
}
