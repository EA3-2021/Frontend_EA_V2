import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayRequestPage } from './holiday-request.page';

const routes: Routes = [
  {
    path: '',
    component: HolidayRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayRequestPageRoutingModule {}
