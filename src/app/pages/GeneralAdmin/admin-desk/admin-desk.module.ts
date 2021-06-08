import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDeskPageRoutingModule } from './admin-desk-routing.module';

import { AdminDeskPage } from './admin-desk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDeskPageRoutingModule
  ],
  declarations: [AdminDeskPage]
})
export class AdminDeskPageModule {}
