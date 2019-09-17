import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HeroesResponse, Hero } from './heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl = 'https://swapi.co/api';

  constructor(private http: HttpClient) {}

  all(): Observable<Hero[]> {
    return this.http.get<HeroesResponse>(`${this.baseUrl}/people`)
      .pipe(
        map(res => res.results.map(info => ({
          name: info.name,
          gender: info.gender,
          birth: info.birth_year,
          hairColor: info.hair_color
        })))
      );
  }
}
