import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "@app/core/services/user.service";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";

@Component({
  selector: "app-activation",
  templateUrl: "./activation.component.html",
  styleUrls: ["./activation.component.scss"],
})
export class ActivationComponent implements OnInit {
  public token: string = null;
  public custombutton: ButtonCustom = {
    buttonMaterialType: 'mat-raised-button',
    buttonType: 'submit',
    buttonTypeClass: 'btn-submit'
  }

  public constructor(
    private activatedRoute: ActivatedRoute, 
    private usersService:UserService,
    private router: Router) {}

  public ngOnInit(): void {
    this.setTokenFromQueryParams();
  }

  private setTokenFromQueryParams(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.token = params.get("token");
      this.usersService.activation(this.token).subscribe(response=>{
        //TODO: Verify if this services works with full registration workflow
        
        // Dependendiendo de la respuesta si es exitosa muestra el componente de activation-success
        // si hay error mostrar el componente de activation-error
        // puedes usar ng-template con ng-container, ng-if, ng switch para variar el contenido estático
      });
    });
  }
}
