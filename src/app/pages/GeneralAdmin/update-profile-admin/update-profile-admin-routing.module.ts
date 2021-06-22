import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateProfileAdminPage } from './update-profile-admin.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateProfileAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateProfileAdminPageRoutingModule {}
