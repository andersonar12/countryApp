import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  constructor(public CountriesService: CountriesService) {}
  ngOnInit(): void {}
  searchByRegion(term: string) {
    this.CountriesService.getCountriesByRegion(term).subscribe((countries) => {
      this.countries = countries as Country[];
    });
  }
}
