import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PadavansRoutingModule } from './padavans-routing.module';
import { PadavansComponent } from './page/padavans.component';
import { PadavansListItemComponent } from './padavans-list-item/padavans-list-item.component';
import { PadavansListComponent } from './padavans-list/padavans-list.component';
import { PadavanFormComponent } from './padavan-form/padavan-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PadavansComponent,
    PadavansListItemComponent,
    PadavansListComponent,
    PadavanFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    PadavansRoutingModule,
    SharedModule
  ]
})
export class PadavansModule {}
