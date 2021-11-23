import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessMenuComponent} from "@app/business-menu/pages/business-menu/business-menu.component";
import {MenuEntriesComponent} from "@app/business-menu/components/menu-entries/menu-entries.component";
import {MenuDessertsComponent} from "@app/business-menu/components/menu-desserts/menu-desserts.component";
import {MenuDrinksComponent} from "@app/business-menu/components/menu-drinks/menu-drinks.component";
import {MenuBottomPlateComponent} from "@app/business-menu/components/menu-bottom-plate/menu-bottom-plate.component";
import {MenuOthersComponent} from "@app/business-menu/components/menu-others/menu-others.component";
import {TyneRoutes} from "@shared/inmutable/enums/url-routes";
import {MenuAddComponent} from "@app/business-menu/components/menu-add/menu-add.component";
import {MenuEditComponent} from "@app/business-menu/components/menu-edit/menu-edit.component";

const routes: Routes = [
  {
    path: '',
    component: BusinessMenuComponent,
    children: [
      {path: 'entries', component: MenuEntriesComponent},
      {path: 'desserts', component: MenuDessertsComponent},
      {path: 'drinks', component: MenuDrinksComponent},
      {path: 'bottomPlates', component: MenuBottomPlateComponent},
      {path: 'others', component: MenuOthersComponent},
    ]
   },
  {path: 'menu-add', component:MenuAddComponent},
  {path: 'menu-edit', component: MenuEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessMenuRoutingModule { }
