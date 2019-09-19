import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../heroes.interface';
import { HeroesService } from '../service/heroes.service';
import { Store } from '@ngrx/store';
import * as fromHeroesReducer from '../reducers/index';
import { loadHeroes } from '../actions/heroes.actions';

@Component({
  selector: 'ngsw-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  isLoading$ = this.store.select(fromHeroesReducer.isLoading);

  constructor(private store: Store<fromHeroesReducer.State>) {
    this.heroes$ = store.select(fromHeroesReducer.allHeroes);
  }

  ngOnInit() {
    this.store.dispatch(loadHeroes());
  }

  onHeroLike(hero: Hero) {
    hero.like = !hero.like;
  }

  onSearch(token: string) {
    this.heroes$ = null;
  }
}
