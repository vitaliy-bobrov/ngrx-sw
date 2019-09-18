import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { nanoid } from 'nanoid';
import { Observable } from 'rxjs';

import { Padavan, PadavanRequiredProps } from '../padavans.interface';

@Injectable({
  providedIn: 'root'
})
export class PadavansService {
  private baseUrl = 'http://localhost:3000/padavans';

  constructor(private http: HttpClient) {}

  all(): Observable<Padavan[]> {
    return this.http.get<Padavan[]>(this.baseUrl);
  }

  load(id: string): Observable<Padavan> {
    return this.http.get<Padavan>(`${this.baseUrl}/${id}`);
  }

  create(props: PadavanRequiredProps): Observable<Padavan> {
    const padavan: Padavan = {
      id: nanoid(5),
      ...props
    };
    const header = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Padavan>(`${this.baseUrl}`, JSON.stringify(padavan), header);
  }

  update(id: string, updates: PadavanRequiredProps) {
    const header = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.patch<Padavan>(
      `${this.baseUrl}/${id}`,
      JSON.stringify(updates),
      header
    );
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}



