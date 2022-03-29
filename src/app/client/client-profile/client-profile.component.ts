import { Component, OnInit } from "@angular/core";
import { ClientResponse } from "@app/client/shared/interfaces/client_response";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-client-profile",
  templateUrl: "./client-profile.component.html",
  styleUrls: ["./client-profile.component.scss"],
})
export class ClientProfileComponent implements OnInit {
  public constructor(
    private activatedRoute:ActivatedRoute
  ) {}

  public client: ClientResponse = null;

  public ngOnInit(): void {
    this.getClient();
  }

  private getClient() {
    this.activatedRoute.data.subscribe((data: { client: ClientResponse})=>{
      this.client = data.client;
    });

  }
}
