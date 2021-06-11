import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationRequestPage } from './registration-request.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRequestPageRoutingModule {}
