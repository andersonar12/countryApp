import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CommonModule, CountryTableComponent, SearchBoxComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent implements OnInit {
  constructor(public countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countriesService.key = 'by-name';
  }
  searchByCountry(term: string) {
    this.countriesService.getCountriesByName(term).subscribe((countries) => {
      this.countriesService.countries['by-name'] = countries as Country[];
    });
  }
}
