import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadavansComponent } from './page/padavans.component';

const routes: Routes = [
  {
    path: '',
    component: PadavansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PadavansRoutingModule {}
