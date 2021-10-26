import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Autoplay } from "swiper";
import SwiperCore, { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/core";
import { BranchImage, BusinessProfileResponse } from "../../models/business-profile-response";
import { BusinessProfileUploadImageLocalsComponent } from "../business-profile-upload-image-locals/business-profile-upload-image-locals.component";
import { Router } from "@angular/router";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

@Component({
  selector: "app-business-profile-image-locals",
  templateUrl: "./business-profile-image-locals.component.html",
  styleUrls: ["./business-profile-image-locals.component.scss"],
})
export class BusinessProfileImageLocalsComponent implements OnInit {
  @Input()
  public restaurant: BusinessProfileResponse = null;
  public images: BranchImage[] = [
    {
      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/1f/91/57/trujillo-restobar-ofrece.jpg",
      id: 1,
    },
    {
      url: "https://www.onemagazine.cl/wp-content/uploads/2019/11/DSC_2570-1024x684.jpg",
      id: 2,
    },
  ];

  public constructor(private dialog: MatDialog, private router: Router) {}

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    // this.getImages();
  }

  private getImages() {
    this.images = this.restaurant?.branch_images;
  }

  public openUploadImagesLocals(): void {
    const dialogRef = this.dialog.open(BusinessProfileUploadImageLocalsComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public editMenu(): void {
    this.router.navigate(["/" + TyneRoutes.BusinessEditMenu]);


  }
}
