import { Component, OnInit } from "@angular/core";
import { TokenService } from "@app/core/helpers/token.service";
import { ClientService } from "@app/core/services/client.service";
import { ClientResponse } from "@app/shared/interfaces/response/client_response";

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
