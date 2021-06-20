import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobClockPage } from './job-clock.page';

const routes: Routes = [
  {
    path: '',
    component: JobClockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobClockPageRoutingModule {}
