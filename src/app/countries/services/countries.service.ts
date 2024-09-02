import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, delay, map, of } from 'rxjs';

interface DataStore {
  'by-capital': Country[];
  'by-name': Country[];
  'by-region': Country[];
}

export type keys = 'by-capital' | 'by-name' | 'by-region';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public baseUrl = 'https://restcountries.com/v3.1';

  // public countries: Country[] = [];

  public key = 'by-capital';
  public countries: DataStore = {
    'by-capital': [],
    'by-name': [],
    'by-region': [],
  };

  constructor(private http: HttpClient) {}

  public getCountries() {
    return this.countries[this.key as keyof DataStore];
  }

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
