import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesListItemComponent } from './heroes-list-item/heroes-list-item.component';
import { SearchHeroesBoxComponent } from './search-heroes-box/search-heroes-box.component';


@NgModule({
  declarations: [HeroesComponent, HeroesListComponent, HeroesListItemComponent, SearchHeroesBoxComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
