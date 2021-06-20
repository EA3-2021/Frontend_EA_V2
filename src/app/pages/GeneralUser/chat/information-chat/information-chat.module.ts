import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationChatPageRoutingModule } from './information-chat-routing.module';

import { InformationChatPage } from './information-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationChatPageRoutingModule
  ],
  declarations: [InformationChatPage]
})
export class InformationChatPageModule {}
