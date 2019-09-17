import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../heroes.interface';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'ngsw-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent {
  heroes$: Observable<Hero[]>;

  constructor(private service: HeroesService) {
    this.heroes$ = service.all();
  }

  onHeroLike(hero: Hero) {
    hero.like = !hero.like;
  }

  onSearch(token: string) {
    this.heroes$ = null;
    this.heroes$ = this.service.find(token);
  }
}
