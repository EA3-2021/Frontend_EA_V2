import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqAdminPage } from './faq-admin.page';

const routes: Routes = [
  {
    path: '',
    component: FaqAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqAdminPageRoutingModule {}
