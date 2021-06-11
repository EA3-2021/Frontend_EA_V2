import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolidayRequestPageRoutingModule } from './holiday-request-routing.module';

import { HolidayRequestPage } from './holiday-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicModule,
    HolidayRequestPageRoutingModule
  ],
  declarations: [HolidayRequestPage]
})
export class HolidayRequestPageModule {}
