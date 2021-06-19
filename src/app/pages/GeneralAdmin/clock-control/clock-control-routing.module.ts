import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClockControlPage } from './clock-control.page';

const routes: Routes = [
  {
    path: '',
    component: ClockControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClockControlPageRoutingModule {}
