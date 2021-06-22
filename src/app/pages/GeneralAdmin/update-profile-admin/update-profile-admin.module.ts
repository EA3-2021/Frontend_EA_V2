import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UpdateProfileAdminPageRoutingModule } from './update-profile-admin-routing.module';

import { UpdateProfileAdminPage } from './update-profile-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateProfileAdminPageRoutingModule
  ],
  declarations: [UpdateProfileAdminPage]
})
export class UpdateProfileAdminPageModule {}
