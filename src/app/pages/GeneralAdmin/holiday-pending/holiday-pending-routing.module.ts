import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayPendingPage } from './holiday-pending.page';

const routes: Routes = [
  {
    path: '',
    component: HolidayPendingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayPendingPageRoutingModule {}
