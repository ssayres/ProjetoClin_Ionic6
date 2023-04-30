import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApagarPageRoutingModule } from './apagar-routing.module';

import { ApagarPage } from './apagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApagarPageRoutingModule
  ],
  declarations: [ApagarPage]
})
export class ApagarPageModule {}
