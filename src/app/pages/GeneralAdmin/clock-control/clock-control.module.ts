import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClockControlPageRoutingModule } from './clock-control-routing.module';
import { ClockControlPage } from './clock-control.page';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClockControlPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [ClockControlPage]
})
export class ClockControlPageModule {}
