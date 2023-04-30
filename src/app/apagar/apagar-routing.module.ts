import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApagarPage } from './apagar.page';

const routes: Routes = [
  {
    path: '',
    component: ApagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApagarPageRoutingModule {}
