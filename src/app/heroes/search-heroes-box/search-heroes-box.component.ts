import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'ngsw-search-heroes-box',
  templateUrl: './search-heroes-box.component.html',
  styleUrls: ['./search-heroes-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchHeroesBoxComponent {
  @Output() search = new EventEmitter<string>();
}
