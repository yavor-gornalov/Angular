import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from "./core/core.module";
import { ThemeModule } from './theme/theme.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ThemeModule,
    UserModule,
    AppRoutingModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
