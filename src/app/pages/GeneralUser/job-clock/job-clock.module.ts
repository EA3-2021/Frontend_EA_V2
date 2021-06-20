import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobClockPageRoutingModule } from './job-clock-routing.module';

import { JobClockPage } from './job-clock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    JobClockPageRoutingModule
  ],
  declarations: [JobClockPage]
})
export class JobClockPageModule {}
