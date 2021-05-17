/**COMPONENTS */
import { AppComponent } from './app.component';

/**MODULES */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule  } from "./core/core.module";
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './pages/auth/auth.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
