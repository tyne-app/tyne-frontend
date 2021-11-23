import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessMenuRoutingModule } from '../routes/business-menu-routing.module';
import {HomeModule} from "@app/home/modules/home.module";
import {SharedModule} from "@shared/modules/shared.module";
import {MaterialModule} from "@shared/modules/material.module";
import {FormsModule} from "@angular/forms";
import {BusinessMenuComponent} from "@app/business-menu/pages/business-menu/business-menu.component";
import {MenuOthersComponent} from "@app/business-menu/components/menu-others/menu-others.component";
import {MenuDrinksComponent} from "@app/business-menu/components/menu-drinks/menu-drinks.component";
import {MenuBottomPlateComponent} from "@app/business-menu/components/menu-bottom-plate/menu-bottom-plate.component";
import {MenuDessertsComponent} from "@app/business-menu/components/menu-desserts/menu-desserts.component";
import {MenuEntriesComponent} from "@app/business-menu/components/menu-entries/menu-entries.component";
import {MenuAddComponent} from "@app/business-menu/components/menu-add/menu-add.component";
import {MenuEditComponent} from "@app/business-menu/components/menu-edit/menu-edit.component";


@NgModule({
  declarations: [
    BusinessMenuComponent,
    MenuOthersComponent,
    MenuDrinksComponent,
    MenuBottomPlateComponent,
    MenuDessertsComponent,
    MenuEntriesComponent,
    MenuAddComponent,
    MenuEditComponent
  ],
  imports: [
    CommonModule,
    BusinessMenuRoutingModule,
    HomeModule,
    SharedModule,
    MaterialModule,
    FormsModule,
  ]
})
export class BusinessMenuModule { }
