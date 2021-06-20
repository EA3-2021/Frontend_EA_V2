import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordUserPageRoutingModule } from './forgot-password-user-routing.module';

import { ForgotPasswordUserPage } from './forgot-password-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForgotPasswordUserPageRoutingModule
  ],
  declarations: [ForgotPasswordUserPage]
})
export class ForgotPasswordUserPageModule {}
