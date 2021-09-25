import { Component, Input, OnInit } from "@angular/core";
import { Autoplay } from "swiper";
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination
} from "swiper/core";
import {
  BranchImage,
  BusinessProfileResponse
} from "../../models/business-profile-response";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

@Component({
  selector: 'app-business-profile-image-locals',
  templateUrl: './business-profile-image-locals.component.html',
  styleUrls: ['./business-profile-image-locals.component.scss']
})
export class BusinessProfileImageLocalsComponent implements OnInit {

  @Input()
  public restaurant: BusinessProfileResponse = null;
  public images: BranchImage[] = [{
    url: 'https://media-cdn.tripadvisor.com/media/photo-s/19/1f/91/57/trujillo-restobar-ofrece.jpg',
    id: 1,
  }];

  public constructor() {}

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    // this.getImages();
  }

  private getImages() {
    this.images = this.restaurant?.branch_images;
  }

}
