import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  public links = [
    // { name: 'Home Page', route: ['/'] },
    // { name: 'About Page', route: ['/about'] },
    // { name: 'Contact Page', route: ['/contact'] },
    { name: 'Por capital', route: ['/countries/by-capital'] },
    { name: 'Por pais', route: ['/countries/by-country'] },
    { name: 'Por region', route: ['/countries/by-region'] },
  ];

  ngOnInit(): void {}
}
