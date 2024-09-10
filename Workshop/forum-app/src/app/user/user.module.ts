import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing-module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ]
})
export class UserModule { }
