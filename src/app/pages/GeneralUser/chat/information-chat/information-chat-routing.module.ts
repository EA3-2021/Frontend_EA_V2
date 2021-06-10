import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationChatPage } from './information-chat.page';

const routes: Routes = [
  {
    path: '',
    component: InformationChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationChatPageRoutingModule {}
