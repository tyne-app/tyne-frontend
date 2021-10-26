import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { BusinessProfileCloseUploadImageComponent } from '../business-profile-close-upload-image/business-profile-close-upload-image.component';

@Component({
  selector: 'app-business-profile-upload-image-locals',
  templateUrl: './business-profile-upload-image-locals.component.html',
  styleUrls: ['./business-profile-upload-image-locals.component.scss']
})
export class BusinessProfileUploadImageLocalsComponent implements OnInit {
  public isUpload = true;

  public constructor(private dialog: MatDialog) { }

  public ngOnInit(): void { }

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

}
