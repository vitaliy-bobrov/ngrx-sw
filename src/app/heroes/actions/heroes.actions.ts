import { Action } from '@ngrx/store';

export enum HeroesActionTypes {
  LoadHeroes = '[Heroes] Load Heroes',
}

export class LoadHeroes implements Action {
  readonly type = HeroesActionTypes.LoadHeroes;
}


export type HeroesActions = LoadHeroes;
