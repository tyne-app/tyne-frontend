/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import SwiperCore, { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/core";
import { SwiperComponent } from "swiper/types";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: "app-business-profile-carousel-upload-image",
  templateUrl: "./business-profile-carousel-upload-image.component.html",
  styleUrls: ["./business-profile-carousel-upload-image.component.scss"],
})
export class BusinessProfileCarouselUploadImageComponent implements OnInit {
  @Input()
  public images = [];

  @ViewChild("swiper", { static: false }) swiper?: SwiperComponent;

  public constructor() {}

  public ngOnInit(): void {}

  public active($event): void {
    console.log($event.activeIndex);
    console.log(this.images[$event.activeIndex]);
  }
}
