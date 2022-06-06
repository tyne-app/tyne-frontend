import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BusinessService } from "@app/business/shared/services/business.service";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { RestaurantAccount } from "@app/shared/interfaces/restaurant/restaurant-account";
import { BusinessProfileService } from "../../business-profile.service";

@Component({
  selector: "app-business-profile-close-upload-image",
  templateUrl: "./business-profile-close-upload-image.component.html",
  styleUrls: ["./business-profile-close-upload-image.component.scss"],
})
export class BusinessProfileCloseUploadImageComponent {
  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: RestaurantAccount,
    public dialogRef: MatDialogRef<BusinessProfileCloseUploadImageComponent>,
    private readonly businessProfileService: BusinessProfileService,
    private readonly businessService: BusinessService,
    private readonly dialogService: DialogService
  ) {}
  public deleteImage(): void {
    this.businessProfileService.currentBranchImageIndex.subscribe((index) => {
      const image = index ? this.data.image_list[index] : this.data.image_list[0];

      this.businessService.deleteImage(this.data.branch.id, image.url_image).subscribe(
        () => {
          this.dialogService.openDialogReloadCurrentPage({
            isSuccessful: true,
            messageButton: "Aceptar",
            subtitle: "La imagen ha sido eliminada exitosamente.",
            title: "Imagen eliminada",
          });
        },
        () => {
          this.dialogService.openDialog({
            isSuccessful: false,
            messageButton: "Aceptar",
            subtitle: "No se ha podido eliminar la imagen",
            title: "Ha ocurrido un error",
          });
        }
      );
    });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
