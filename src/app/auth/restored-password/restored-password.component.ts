import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { emailRegex, passwordRegex } from "@app/shared/inmutable/constants/regex";

@Component({
  selector: "app-restored-password",
  templateUrl: "./restored-password.component.html",
  styleUrls: ["./restored-password.component.scss"],
})
export class RestoredPasswordComponent implements OnInit {
  public get email(): AbstractControl {
    return this.restoredPasswordForm.get("email");
  }
  public get password(): AbstractControl {
    return this.restoredPasswordForm.get("email");
  }
  public get confirmPassword(): AbstractControl {
    return this.restoredPasswordForm.get("email");
  }

  public restoredPasswordForm: FormGroup;



  public constructor(public formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.buildRestoredPasswordForm(); 
  }

  public buildRestoredPasswordForm(): void {
    this.restoredPasswordForm = this.formBuilder.group({
      email: ["", [Validators.required,Validators.pattern(emailRegex)]],
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      confirmPassword: ["", [Validators.required,Validators.pattern(passwordRegex)]],
    });
  }

  public restorePassword(): void {
    if (!this.restoredPasswordForm.invalid) {
      console.log("formulario valido");
    } else {
      console.log("formulario inválido");
    }
  }
}
