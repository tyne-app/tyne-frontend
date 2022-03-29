import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { UserService } from "@app/core/services/user.service";
import { FileService } from "@app/shared/helpers/file.service";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { errorContent } from "@app/shared/components/dialog/shared/inmutable/constants/dialog-message";
import { HTMLInputEvent } from "@app/shared/interfaces/common/event-input-file";


@Component({
  selector: "app-profile-image",
  templateUrl: "./profile-image.component.html",
  styleUrls: ["./profile-image.component.scss"],
})
export class ProfileImageComponent implements OnInit {

  @Input() public urlImage: string | ArrayBuffer;
  public imageProfile: File = null;

  public constructor(
    public clientService: UserService,
    private dialogService: DialogService,
    private fileService: FileService,
    private cdref: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {}

  public ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  public uploadImageFromDirectory(event: HTMLInputEvent): void {
    this.imageProfile = event.target.files[0];
    this.ValidateImageFormatToUpload(this.imageProfile);
  }

  public updateImageProfile(imageProfile: File): void {
    this.clientService.putImageProfile(imageProfile).subscribe(
      () => {
        this.updateImageUrlSource();
      },
      () => {
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
