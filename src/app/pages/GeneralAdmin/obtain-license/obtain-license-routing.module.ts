import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObtainLicensePage } from './obtain-license.page';

const routes: Routes = [
  {
    path: '',
    component: ObtainLicensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObtainLicensePageRoutingModule {}
