import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObtainLicensePageRoutingModule } from './obtain-license-routing.module';

import { ObtainLicensePage } from './obtain-license.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObtainLicensePageRoutingModule
  ],
  declarations: [ObtainLicensePage]
})
export class ObtainLicensePageModule {}
