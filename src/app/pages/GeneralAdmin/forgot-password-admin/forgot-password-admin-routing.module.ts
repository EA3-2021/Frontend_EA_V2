import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordAdminPage } from './forgot-password-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordAdminPageRoutingModule {}
