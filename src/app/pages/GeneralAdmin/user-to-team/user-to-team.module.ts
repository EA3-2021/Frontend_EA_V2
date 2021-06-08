import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserToTeamPageRoutingModule } from './user-to-team-routing.module';

import { UserToTeamPage } from './user-to-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UserToTeamPageRoutingModule
  ],
  declarations: [UserToTeamPage]
})
export class UserToTeamPageModule {}
