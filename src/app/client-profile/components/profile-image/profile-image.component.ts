import { Component, Input, OnInit } from "@angular/core";
import { FileService } from "@app/core/helpers/file.service";
import { ClientService } from "@app/core/services/client.service";
import { DialogService } from "src/app/shared/components/components/dialog/services/dialog.service";
import { errorContent } from "src/app/shared/inmutable/constants/dialog-messages";
import { HTMLInputEvent } from "../../interfaces/event-input-file";

@Component({
  selector: "app-profile-image",
  templateUrl: "./profile-image.component.html",
  styleUrls: ["./profile-image.component.scss"],
})
export class ProfileImageComponent implements OnInit {
  // #region Variables

  @Input() public urlImage: string | ArrayBuffer;
  public imageProfile: File = null;

  // #endregion

  public constructor(
    public clientProfileService: ClientService,
    private dialogService: DialogService,
    private fileService: FileService
  ) {}

  public ngOnInit(): void {}

  public getImageProfile(): string | ArrayBuffer {
    return this.urlImage ? this.urlImage : "/assets/img/user-profile.svg";
  }

  public uploadImageFromDirectory(event: HTMLInputEvent): void {
    this.imageProfile = event.target.files[0];
    this.ValidateImageFormatToUpload(this.imageProfile);
  }

  public updateImageProfile(imageProfile: File): void {
    this.clientProfileService.putImageProfile(imageProfile).subscribe(
      () => {
        this.updateImageUrlSource();
      },
      (error) => {
        this.dialogService.openDialog(errorContent);
      }
    );
  }

  private updateImageUrlSource(): void {
    const reader = new FileReader();
    reader.readAsDataURL(this.imageProfile);
    reader.onload = () => {
      this.urlImage = reader.result;
    };
  }

  private ValidateImageFormatToUpload(file: File): void {
    const isValidImageFormat = this.fileService.isValidFormatImageToUpload(file);
    if (isValidImageFormat) {
      this.updateImageProfile(this.imageProfile);
    } else {
      this.dialogService.openDialog(errorContent);
    }
  }
}
