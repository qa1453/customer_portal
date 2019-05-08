import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [LoginComponent, ChangePasswordComponent, ForgotPasswordComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
