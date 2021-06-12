import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTaskByAdminPageRoutingModule } from './update-task-by-admin-routing.module';

import { UpdateTaskByAdminPage } from './update-task-by-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateTaskByAdminPageRoutingModule
  ],
  declarations: [UpdateTaskByAdminPage]
})
export class UpdateTaskByAdminPageModule {}
