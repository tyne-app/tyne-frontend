import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "@app/core/services/user.service";
import { passwordRegex } from "@app/shared/inmutable/constants/regex";

@Component({
  selector: "app-restored-password",
  templateUrl: "./restored-password.component.html",
  styleUrls: ["./restored-password.component.scss"],
})
export class RestoredPasswordComponent implements OnInit {

  public get password(): AbstractControl {
    return this.restoredPasswordForm.get("password");
  }

  public get confirmPassword(): AbstractControl {
    return this.restoredPasswordForm.get("confirmPassword");
  }

  public restoredPasswordForm: FormGroup;



  public constructor(
    public formBuilder: FormBuilder,
    public userService:UserService,
    public activedRoute:ActivatedRoute
    ) {}

  public ngOnInit(): void {
    this.buildRestoredPasswordForm(); 
  }

  public buildRestoredPasswordForm(): void {
    this.restoredPasswordForm = this.formBuilder.group({
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      confirmPassword: ["", [Validators.required,Validators.pattern(passwordRegex)]],
    });
  }


  public restorePassword(): void {
    this.activedRoute.paramMap.subscribe(params=>{
     const token:string = params.get('token');
     console.log(this.confirmPassword.value);
     if (!this.restoredPasswordForm.invalid) {
      this.userService.restorePassword(this.confirmPassword.value,token).subscribe(response=>{
        console.log(response);
      });
    } else {
      console.log("formulario inválido");
    }
    });

  }
}
