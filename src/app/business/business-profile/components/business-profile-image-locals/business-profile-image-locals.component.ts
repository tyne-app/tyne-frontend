import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { ImageList, RestaurantAccount } from "@app/shared/interfaces/restaurant/restaurant-account";
import { Autoplay } from "swiper";
import SwiperCore, { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/core";
import { BusinessProfileUploadImageLocalsComponent } from "../business-profile-upload-image-locals/business-profile-upload-image-locals.component";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

@Component({
  selector: "app-business-profile-image-locals",
  templateUrl: "./business-profile-image-locals.component.html",
  styleUrls: ["./business-profile-image-locals.component.scss"],
})
export class BusinessProfileImageLocalsComponent implements OnInit {
  @Input()
  public account: RestaurantAccount = null;

  public images: ImageList[] = [];

  public constructor(private dialog: MatDialog, private router: Router) {}

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    this.images = this.account?.image_list;
  }

  public openUploadImagesLocals(): void {
    const dialogRef = this.dialog.open(BusinessProfileUploadImageLocalsComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
      data: this.account,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public editMenu(): void {
    this.router.navigate(["/" + TyneRoutes.BusinessEditMenu]);
  }
}
