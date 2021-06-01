import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskGeneratorPageRoutingModule } from './task-generator-routing.module';

import { TaskGeneratorPage } from './task-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskGeneratorPageRoutingModule
  ],
  declarations: [TaskGeneratorPage]
})
export class TaskGeneratorPageModule {}
