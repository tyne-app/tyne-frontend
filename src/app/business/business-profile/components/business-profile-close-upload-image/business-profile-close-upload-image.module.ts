import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CloseModalModule } from "@app/shared/components";
import { BusinessProfileCloseUploadImageComponent } from "./business-profile-close-upload-image.component";

@NgModule({
  imports: [CommonModule, CloseModalModule, MatButtonModule],
  declarations: [BusinessProfileCloseUploadImageComponent],
  exports: [BusinessProfileCloseUploadImageComponent],
})
export class BusinessProfileCloseUploadImageModule {}
