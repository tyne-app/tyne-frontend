import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BusinessService } from "@app/business/shared/services/business.service";
import { DialogModel } from "@app/shared/components/dialog/shared/interfaces/dialog-model";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { FileService } from "@app/shared/helpers";
import { HTMLInputEvent } from "@app/shared/interfaces/common/event-input-file";
import { RestaurantAccount } from "@app/shared/interfaces/restaurant/restaurant-account";
import { BusinessProfileCloseUploadImageComponent } from "../business-profile-close-upload-image/business-profile-close-upload-image.component";

@Component({
  selector: "app-business-profile-upload-image-locals",
  templateUrl: "./business-profile-upload-image-locals.component.html",
  styleUrls: ["./business-profile-upload-image-locals.component.scss"],
})
export class BusinessProfileUploadImageLocalsComponent implements OnInit {
  public isUpload = true;
  public images = [];
  public imageProfile: File = null;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: RestaurantAccount,
    public dialogRef: MatDialogRef<BusinessProfileUploadImageLocalsComponent>,
    private dialog: MatDialog,
    private readonly businessService: BusinessService,
    private fileService: FileService,
    private dialogService: DialogService
  ) {}

  public ngOnInit(): void {
    this.setImages();
  }

  public closeUploadImagesLocals(): void {
    const dialogRef = this.dialog.open(BusinessProfileCloseUploadImageComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public uploadImage(event: HTMLInputEvent): void {
    this.imageProfile = event.target.files[0];
    this.ValidateImageFormatToUpload(this.imageProfile);
  }

  private setImages() {
    this.businessService.getImagesByBranchId(this.data.branch.id).subscribe((images) => {
      this.images = images;
    });
  }

  private ValidateImageFormatToUpload(file: File): void {
    const isValidImageFormat = this.fileService.isValidFormatImageToUpload(file);
    if (isValidImageFormat) {
      this.updateImageProfile(this.imageProfile);
    } else {
      const dialog: DialogModel = {
        isSuccessful: false,
        title: "Ha ocurrido un problema",
        subtitle: "Debe seleccionar una imagen",
        messageButton: "Volver",
      };
      this.dialogService.openDialog(dialog);
    }
  }

  private updateImageProfile(imageProfile: File): void {
    // this.clientService.putImageProfile(imageProfile).subscribe(
    //   () => {
    //     this.updateImageUrlSource();
    //   },
    //   () => {
    //     this.dialogService.openDialog(errorContent);
    //   }
    // );
  }

  private updateImageUrlSource(): void {
    const reader = new FileReader();
    reader.readAsDataURL(this.imageProfile);
    reader.onload = () => {
      // this.urlImage = reader.result;
    };
  }
}
