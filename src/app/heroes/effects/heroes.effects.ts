import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { loadHeroes, loadHeroesSuccess, loadHeroesFail } from '../actions/heroes.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { HeroesService } from '../service/heroes.service';

@Injectable()
export class HeroesEffects {
  load$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadHeroes),
      mergeMap(() => this.service.all().pipe(
        map((res) => loadHeroesSuccess({payload: res})),
        catchError(() => of(loadHeroesFail()))
      ))
    )
  );

  constructor(private actions$: Actions, private service: HeroesService) {}
}
