import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder = '';
  @Output() onValue = new EventEmitter<string>();

  ngOnInit(): void {}

  emitValue(term: string): void {
    this.onValue.emit(term);
  }
}
