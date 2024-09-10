import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from "./core/core.module";
import { ThemeModule } from './theme/theme.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './error/error.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    ThemeModule,
    UserModule,
    AppRoutingModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
