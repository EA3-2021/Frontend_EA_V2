import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordAdminPageRoutingModule } from './forgot-password-admin-routing.module';

import { ForgotPasswordAdminPage } from './forgot-password-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForgotPasswordAdminPageRoutingModule
  ],
  declarations: [ForgotPasswordAdminPage]
})
export class ForgotPasswordAdminPageModule {}
