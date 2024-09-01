import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css',
})
export class CountryTableComponent implements OnInit {
  @Input() countries: Country[] = [];

  ngOnInit(): void {}
}
