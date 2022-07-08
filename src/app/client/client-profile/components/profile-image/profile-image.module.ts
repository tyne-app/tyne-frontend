import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { AvatarPipe } from "../../shared/pipes/avatar.pipe";
import { ProfileImageComponent } from "./profile-image.component";

@NgModule({
  declarations: [ProfileImageComponent, AvatarPipe],
  imports: [CommonModule, MatButtonModule],
  exports: [ProfileImageComponent],
})
export class ProfileImageModule {}
