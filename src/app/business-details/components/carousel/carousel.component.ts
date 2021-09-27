import { Component, Input, OnInit } from "@angular/core";
import { Autoplay } from "swiper";
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/core";
import {
  BranchImage,
  BusinessDetailsResponse,
} from "../../models/business-details-response";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  @Input()
  public restaurant: BusinessDetailsResponse = null;
  public images: BranchImage[] = [];

  public constructor() {}

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    this.getImages();
  }

  private getImages() {
    this.images = this.restaurant?.branch_images;
  }
}
