import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTaskByAdminPage } from './update-task-by-admin.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTaskByAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTaskByAdminPageRoutingModule {}
