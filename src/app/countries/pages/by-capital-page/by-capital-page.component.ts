import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    HttpClientModule,
    CountryTableComponent,
    LoadingSpinnerComponent,
  ],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent implements OnInit {
  public isLoading: boolean = false;

  constructor(public countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countriesService.key = 'by-capital';
  }

  searchByCapital(term: string) {
    this.isLoading = true;
    this.countriesService.getCountriesByCapital(term).subscribe({
      next: (countries) => {
        this.countriesService.countries['by-capital'] = countries as Country[];
      },
      error: () => {},
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
