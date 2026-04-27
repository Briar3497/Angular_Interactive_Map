import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorldBank {
  constructor(private http: HttpClient) {}

  getCountryData(countryCode: string): Observable<any> {
    const url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;
    return this.http.get(url).pipe(map((response: any) => response[1][0]));
  }
}
