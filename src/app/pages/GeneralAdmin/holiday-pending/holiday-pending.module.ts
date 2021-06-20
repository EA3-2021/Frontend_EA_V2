import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolidayPendingPageRoutingModule } from './holiday-pending-routing.module';

import { HolidayPendingPage } from './holiday-pending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolidayPendingPageRoutingModule
  ],
  declarations: [HolidayPendingPage]
})
export class HolidayPendingPageModule {}
