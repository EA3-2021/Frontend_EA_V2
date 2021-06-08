import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetLicensePage } from './get-license.page';

const routes: Routes = [
  {
    path: '',
    component: GetLicensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetLicensePageRoutingModule {}
