import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent implements OnInit {
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;
  constructor(public countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countriesService.key = 'by-region';
  }
  searchByRegion(term: Region) {
    this.selectedRegion = term;
    this.countriesService.getCountriesByRegion(term).subscribe((countries) => {
      this.countriesService.countries['by-region'] = countries as Country[];
    });
  }
}
