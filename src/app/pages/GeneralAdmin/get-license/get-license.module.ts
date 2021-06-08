import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetLicensePageRoutingModule } from './get-license-routing.module';

import { GetLicensePage } from './get-license.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GetLicensePageRoutingModule
  ],
  declarations: [GetLicensePage]
})
export class GetLicensePageModule {}
