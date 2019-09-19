import { Action } from '@ngrx/store';
import { Hero } from '../heroes.interface';

export enum HeroesActionTypes {
  LoadHeroes = '[Heroes] Load Heroes',
  LoadHeroesSuccess = '[Heroes] Load Heroes Success',
  LoadHeroesFail = '[Heroes] Load Heroes Fail'
}

export class LoadHeroes implements Action {
  readonly type = HeroesActionTypes.LoadHeroes;
}

export class LoadHeroesSuccess implements Action {
  readonly type = HeroesActionTypes.LoadHeroesSuccess;

  constructor(public data: Hero[]) {}
}

export class LoadHeroesFail implements Action {
  readonly type = HeroesActionTypes.LoadHeroesFail;
}

export type HeroesActions =
  LoadHeroes
  | LoadHeroesSuccess
  | LoadHeroesFail;
