import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../user/user.service';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent
  ],
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent
  ]
})
export class CoreModule { }
