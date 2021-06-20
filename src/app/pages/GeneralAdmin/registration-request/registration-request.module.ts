import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationRequestPageRoutingModule } from './registration-request-routing.module';

import { RegistrationRequestPage } from './registration-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationRequestPageRoutingModule
  ],
  declarations: [RegistrationRequestPage]
})
export class RegistrationRequestPageModule {}
