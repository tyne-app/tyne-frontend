import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Ng9RutModule } from "ng9-rut";
import { HomeModule } from "src/app/home/modules/home.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { SwiperModule } from "swiper/angular";
import { MaterialModule } from "../../shared/modules/material.module";
import { BusinessProfileBodyComponent } from "../components/business-profile-body/business-profile-body.component";
import { BusinessProfileCarouselUploadImageComponent } from "../components/business-profile-carousel-upload-image/business-profile-carousel-upload-image.component";
import { BusinessProfileCloseUploadImageComponent } from "../components/business-profile-close-upload-image/business-profile-close-upload-image.component";
import { BusinessProfileEditBankDataComponent } from "../components/business-profile-edit-bank-data/business-profile-edit-bank-data.component";
import { BusinessProfileEditDataComponent } from "../components/business-profile-edit-data/business-profile-edit-data.component";
import { BusinessProfileEditPasswordComponent } from "../components/business-profile-edit-password/business-profile-edit-password.component";
import { BusinessProfileEditWorkDaysComponent } from "../components/business-profile-edit-work-days/business-profile-edit-work-days.component";
import { BusinessProfileImageLocalsComponent } from "../components/business-profile-image-locals/business-profile-image-locals.component";
import { BusinessProfileUploadImageLocalsComponent } from "../components/business-profile-upload-image-locals/business-profile-upload-image-locals.component";
import { BusinessProfileComponent } from "../pages/business-profile.component";
import { BusinessProfileRoutingModule } from "../routes/business-registration-routing.module";

@NgModule({
  declarations: [
    BusinessProfileComponent,
    BusinessProfileBodyComponent,
    BusinessProfileEditPasswordComponent,
    BusinessProfileEditBankDataComponent,
    BusinessProfileEditDataComponent,
    BusinessProfileEditWorkDaysComponent,
    BusinessProfileImageLocalsComponent,
    BusinessProfileUploadImageLocalsComponent,
    BusinessProfileCarouselUploadImageComponent,
    BusinessProfileCloseUploadImageComponent,
  ],
  imports: [
    CommonModule,
    BusinessProfileRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    SwiperModule,
    Ng9RutModule,
    MatSlideToggleModule,
  ],
})
export class BusinessProfileModule {}
