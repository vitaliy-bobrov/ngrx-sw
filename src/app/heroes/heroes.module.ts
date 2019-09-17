import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './page/heroes.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesListItemComponent } from './heroes-list-item/heroes-list-item.component';
import { SearchHeroesBoxComponent } from './search-heroes-box/search-heroes-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroesListComponent,
    HeroesListItemComponent,
    SearchHeroesBoxComponent
  ],
  imports: [
    HeroesRoutingModule,
    SharedModule
  ]
})
export class HeroesModule {}
