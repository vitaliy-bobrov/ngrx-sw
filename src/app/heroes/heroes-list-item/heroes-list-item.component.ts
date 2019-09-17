import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Hero } from '../heroes.interface';

@Component({
  selector: 'ngsw-heroes-list-item',
  templateUrl: './heroes-list-item.component.html',
  styleUrls: ['./heroes-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListItemComponent {
  @Input() hero: Hero;
  @Output() like = new EventEmitter<Hero>();
}
