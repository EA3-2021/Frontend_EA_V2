import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarAdminPage } from './calendar-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarAdminPageRoutingModule {}
