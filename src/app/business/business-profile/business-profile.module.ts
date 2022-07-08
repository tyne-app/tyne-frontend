import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FooterModule, HeaderModule, SpinnerModule } from "@app/shared/components";
import { Ng9RutModule } from "ng9-rut";
import { SwiperModule } from "swiper/angular";
import { BusinessProfileRoutingModule } from "./business-profile-routing.module";
import { BusinessProfileComponent } from "./business-profile.component";
import { BusinessProfileBodyModule } from "./components/business-profile-body/business-profile-body.module";
import { BusinessProfileCarouselUploadImageModule } from "./components/business-profile-carousel-upload-image/business-profile-carousel-upload-image.module";
import { BusinessProfileCloseUploadImageModule } from "./components/business-profile-close-upload-image/business-profile-close-upload-image.module";
import { BusinessProfileEditBankDataModule } from "./components/business-profile-edit-bank-data/business-profile-edit-bank-data.module";
import { BusinessProfileEditDataModule } from "./components/business-profile-edit-data/business-profile-edit-data.module";
import { BusinessProfileEditPasswordModule } from "./components/business-profile-edit-password/business-profile-edit-password.module";
import { BusinessProfileEditWorkDaysModule } from "./components/business-profile-edit-work-days/business-profile-edit-work-days.module";
import { BusinessProfileImageLocalsModule } from "./components/business-profile-image-locals/business-profile-image-locals.module";
import { BusinessProfileUploadImageLocalsModule } from "./components/business-profile-upload-image-locals/business-profile-upload-image-locals.module";

@NgModule({
  declarations: [BusinessProfileComponent],
  imports: [
    CommonModule,
    BusinessProfileRoutingModule,
    SwiperModule,
    Ng9RutModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    BusinessProfileEditPasswordModule,
    BusinessProfileBodyModule,
    BusinessProfileCarouselUploadImageModule,
    BusinessProfileCloseUploadImageModule,
    BusinessProfileEditBankDataModule,
    BusinessProfileEditDataModule,
    BusinessProfileEditWorkDaysModule,
    BusinessProfileImageLocalsModule,
    BusinessProfileUploadImageLocalsModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
  ],
})
export class BusinessProfileModule {}
