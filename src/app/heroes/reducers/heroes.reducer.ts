import { Action } from '@ngrx/store';
import { Hero } from '../heroes.interface';

export const heroesFeatureKey = 'heroes';

export interface State {
  heroes: Hero[];
  loading: boolean;
}

export const initialState: State = {
  heroes: [],
  loading: false
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
