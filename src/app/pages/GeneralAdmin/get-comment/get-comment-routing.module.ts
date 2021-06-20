import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetCommentPage } from './get-comment.page';

const routes: Routes = [
  {
    path: '',
    component: GetCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetCommentPageRoutingModule {}
