import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqAdminPageRoutingModule } from './faq-admin-routing.module';

import { FaqAdminPage } from './faq-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FaqAdminPageRoutingModule
  ],
  declarations: [FaqAdminPage]
})
export class FaqAdminPageModule {}
