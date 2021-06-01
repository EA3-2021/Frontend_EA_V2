import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskGeneratorPage } from './task-generator.page';

const routes: Routes = [
  {
    path: '',
    component: TaskGeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskGeneratorPageRoutingModule {}
