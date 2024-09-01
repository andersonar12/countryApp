import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  public getCountriesByCapital(term: string) {
    let url = `${this.baseUrl}/capital/${term}`;
    return this.http.get<Country[]>(url).pipe(this.pipeCatchError());
  }

  public getCountriesByName(term: string) {
    let url = `${this.baseUrl}/name/${term}`;
    return this.http.get<Country[]>(url).pipe(this.pipeCatchError());
  }

  public getCountriesByRegion(term: string) {
    let url = `${this.baseUrl}/region/${term}`;
    return this.http.get<Country[]>(url).pipe(this.pipeCatchError());
  }

  public searhCountryByAlphaCode(code: string) {
    let url = `${this.baseUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => countries[0]),
      catchError(() => of(null))
    );
  }

  pipeCatchError() {
    return catchError((error) => {
      console.log(error);
      return of([]);
    });
  }
}
