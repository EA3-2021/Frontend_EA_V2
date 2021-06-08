<<<<<<< HEAD
import { NgModule } from '@angular/core';
=======
import { NgModule} from '@angular/core';
>>>>>>> features
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';

// Calendar UI Module
import { CalendarModule } from 'ion2-calendar';
=======
import { CalendarPageRoutingModule } from './calendar-routing.module';
import { CalendarPage } from './calendar.page';
import { CalendarModule } from 'ion2-calendar';
import { NgCalendarModule  } from 'ionic2-calendar';

>>>>>>> features

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarPage
      }
    ]),
<<<<<<< HEAD
    CalendarPageRoutingModule
=======
    CalendarPageRoutingModule,
    NgCalendarModule,
>>>>>>> features
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
<<<<<<< HEAD
=======


>>>>>>> features
