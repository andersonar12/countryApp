import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

export const countriesRoutes: Routes = [
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    path: 'by-capital',
    component: ByCapitalPageComponent,
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent,
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent,
  },

  { path: '**', redirectTo: 'by-capital' },
];
