import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HeroesResponse } from './heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl = 'https://swapi.co/api';

  constructor(private http: HttpClient) {}

  all(): Observable<HeroesResponse> {
    return this.http.get<HeroesResponse>(`${this.baseUrl}/people`);
  }
}
