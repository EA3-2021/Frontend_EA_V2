import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksByAdminPage } from './tasks-by-admin.page';

const routes: Routes = [
  {
    path: '',
    component: TasksByAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksByAdminPageRoutingModule {}
