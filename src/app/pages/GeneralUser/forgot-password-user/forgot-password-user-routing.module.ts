import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordUserPage } from './forgot-password-user.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordUserPageRoutingModule {}
