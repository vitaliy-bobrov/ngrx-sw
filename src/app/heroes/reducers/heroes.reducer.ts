import { Action, createFeatureSelector } from '@ngrx/store';
import { Hero } from '../heroes.interface';
import * as heroesActions from '../actions/heroes.actions';

export const heroesFeatureKey = 'heroes';

export interface State {
  heroes: Hero[];
  loading: boolean;
}

export const initialState: State = {
  heroes: [],
  loading: false
};

export function reducer(state = initialState, action: heroesActions.HeroesActions): State {
  switch (action.type) {
    case heroesActions.HeroesActionTypes.LoadHeroes:
      return {
        ...state,
        loading: true
      };
    case heroesActions.HeroesActionTypes.LoadHeroesSuccess:
      return {
        ...state,
        heroes: (action as heroesActions.LoadHeroesSuccess).payload,
        loading: false
      };
    case heroesActions.HeroesActionTypes.LoadHeroesFail:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
export const heroesSelector = createFeatureSelector(heroesFeatureKey);
export const allHeroes = (state: State) => state.heroes;
export const isLoading = (state: State) => state.loading;
