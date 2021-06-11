import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksByAdminPageRoutingModule } from './tasks-by-admin-routing.module';

import { TasksByAdminPage } from './tasks-by-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TasksByAdminPageRoutingModule
  ],
  declarations: [TasksByAdminPage]
})
export class TasksByAdminPageModule {}
