import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromHeroes from './heroes.reducer';

export const heroesFeatureKey = 'heroes';

export interface State {
  [fromHeroes.heroesFeatureKey]: fromHeroes.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromHeroes.heroesFeatureKey]: fromHeroes.reducer,
};

const heroesStateSelector = createFeatureSelector(heroesFeatureKey);
const heroesState = createSelector(heroesStateSelector, fromHeroes.heroesSelector);
export const allHeroes = createSelector(heroesState, fromHeroes.allHeroes);
export const isLoading = createSelector(heroesState, fromHeroes.isLoading);
