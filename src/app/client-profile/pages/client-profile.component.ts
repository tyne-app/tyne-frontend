import { Component, OnInit } from "@angular/core";
import { ClientResponse } from "@app/shared/interfaces/response/client_response";
import { ClientService } from "@app/shared/services/client.service";
import { TokenService } from "src/app/shared/helpers/token.service";

@Component({
  selector: "app-client-profile",
  templateUrl: "./client-profile.component.html",
  styleUrls: ["./client-profile.component.scss"],
})
export class ClientProfileComponent implements OnInit {
  public constructor(private tokenService: TokenService, private clientService: ClientService) {}

  public client: ClientResponse = null;

  public ngOnInit(): void {
    this.getClient();
  }

  private getClient() {
    const token = this.tokenService.getDecodedJwtToken();

    this.clientService.getById(token.id_branch_client).subscribe((response) => {
      this.client = response;
    });
  }
}
