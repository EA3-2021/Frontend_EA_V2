import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqUserPageRoutingModule } from './faq-user-routing.module';

import { FaqUserPage } from './faq-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqUserPageRoutingModule
  ],
  declarations: [FaqUserPage]
})
export class FaqUserPageModule {}
