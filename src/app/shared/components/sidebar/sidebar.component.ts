import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CountriesService,
  keys,
} from '../../../countries/services/countries.service';
interface Link {
  name: string;
  route: string[];
  keyDat: keys;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  public links: Link[] = [
    // { name: 'Home Page', route: ['/'] },
    // { name: 'About Page', route: ['/about'] },
    // { name: 'Contact Page', route: ['/contact'] },
    {
      name: 'Por capital',
      route: ['/countries/by-capital'],
      keyDat: 'by-capital',
    },
    { name: 'Por pais', route: ['/countries/by-country'], keyDat: 'by-name' },
    {
      name: 'Por region',
      route: ['/countries/by-region'],
      keyDat: 'by-region',
    },
  ];

  constructor(public countriesService: CountriesService) {}

  ngOnInit(): void {}

  setCountriesByKey(key: keys) {
    this.countriesService.countries[key];
  }
}
