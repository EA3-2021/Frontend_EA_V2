import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarAdminPageRoutingModule } from './calendar-admin-routing.module';
import { CalendarAdminPage } from './calendar-admin.page';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarAdminPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalendarAdminPage]
})
export class CalendarAdminPageModule {}
