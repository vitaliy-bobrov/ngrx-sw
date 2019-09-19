import { Action, createAction, props } from '@ngrx/store';
import { Hero } from '../heroes.interface';

export const loadHeroes = createAction('[Heroes] Load Heroes');
export const loadHeroesSuccess = createAction(
  '[Heroes] Load Heroes Success',
  props<{payload: Hero[]}>()
);
export const loadHeroesFail = createAction('[Heroes] Load Heroes Fail');
