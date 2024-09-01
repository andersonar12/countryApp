import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    HttpClientModule,
    CountryTableComponent,
  ],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];

  constructor(public countriesService: CountriesService) {}
  ngOnInit(): void {}

  searchByCapital(term: string) {
    this.countriesService.getCountriesByCapital(term).subscribe((countries) => {
      this.countries = countries as Country[];
    });
  }
}
