import { Component, Input, OnInit } from '@angular/core';
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

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-business-profile-carousel-upload-image',
  templateUrl: './business-profile-carousel-upload-image.component.html',
  styleUrls: ['./business-profile-carousel-upload-image.component.scss']
})
export class BusinessProfileCarouselUploadImageComponent implements OnInit {

  @Input()
  public restaurant: BusinessProfileResponse = null;
  public images: BranchImage[] = [
    {
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/19/1f/91/57/trujillo-restobar-ofrece.jpg',
      id: 1,
    },
    {
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/19/1f/91/57/trujillo-restobar-ofrece.jpg',
      id: 2,
    },
    
  ];

  constructor() {}

  ngOnInit() {
  }

}
