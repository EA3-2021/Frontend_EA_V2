import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqUserPage } from './faq-user.page';

const routes: Routes = [
  {
    path: '',
    component: FaqUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqUserPageRoutingModule {}
