import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
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

const handleHeroesLoad = (state: State) => ({
  ...state,
  loading: true
});

const handleHeroesSuccess = (state: State, action) => ({
  ...state,
  loading: false,
  heroes: action.payload
});

const handleHeroesFail = (state: State) => ({
  ...state,
  loading: false
});

const heroesReducer = createReducer(
  initialState,
  on(heroesActions.loadHeroes, handleHeroesLoad),
  on(heroesActions.loadHeroesSuccess, handleHeroesSuccess),
  on(heroesActions.loadHeroesFail, handleHeroesFail)
);

export function reducer(state, action: Action): State {
  return heroesReducer(state, action);
}

export const heroesSelector = createFeatureSelector(heroesFeatureKey);
export const allHeroes = (state: State) => state.heroes;
export const isLoading = (state: State) => state.loading;
