/**COMPONENTS */
import { AppComponent } from './app.component';

/**MODULES */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule  } from "./core/core.module";
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './pages/auth/auth.module';

import { RegistrationComponent } from './pages/auth/registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    AuthModule,
  ],
  entryComponents: [RegistrationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
