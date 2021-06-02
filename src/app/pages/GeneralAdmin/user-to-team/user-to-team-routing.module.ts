import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserToTeamPage } from './user-to-team.page';

const routes: Routes = [
  {
    path: '',
    component: UserToTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserToTeamPageRoutingModule {}
