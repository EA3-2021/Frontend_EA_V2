import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetCommentPageRoutingModule } from './get-comment-routing.module';

import { GetCommentPage } from './get-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetCommentPageRoutingModule
  ],
  declarations: [GetCommentPage]
})
export class GetCommentPageModule {}
