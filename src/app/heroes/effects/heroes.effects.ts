import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { HeroesActionTypes, LoadHeroesSuccess, LoadHeroesFail } from '../actions/heroes.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { HeroesService } from '../service/heroes.service';
import { Action } from '@ngrx/store';

@Injectable()
export class HeroesEffects {

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(HeroesActionTypes.LoadHeroes),
    mergeMap(() => this.service.all().pipe(
      map((res) => new LoadHeroesSuccess(res)),
      catchError(() => of(new LoadHeroesFail()))
    ))
  );

  constructor(private actions$: Actions, private service: HeroesService) {}
}
