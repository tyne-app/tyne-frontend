/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { BranchImageResponse } from "@app/business/shared/interfaces/branch-image.response";
import SwiperCore, { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/core";
import { SwiperComponent } from "swiper/types";
import { BusinessProfileService } from "../../business-profile.service";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: "app-business-profile-carousel-upload-image",
  templateUrl: "./business-profile-carousel-upload-image.component.html",
  styleUrls: ["./business-profile-carousel-upload-image.component.scss"],
})
export class BusinessProfileCarouselUploadImageComponent implements OnInit {
  @Input()
  public images: BranchImageResponse[] = [];

  @ViewChild("swiper", { static: false }) swiper?: SwiperComponent;

  public constructor(private readonly businessProfileService: BusinessProfileService) {}

  public ngOnInit(): void {}

  public active($event: any): void {
    this.businessProfileService.branchImageIndexDataSource.next($event.activeIndex);
  }
}
