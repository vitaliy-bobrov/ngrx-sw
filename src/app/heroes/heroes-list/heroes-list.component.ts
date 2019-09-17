import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Hero } from '../heroes.interface';

@Component({
  selector: 'ngsw-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListComponent {
  @Input() heroes: Hero[];
  @Output() like = new EventEmitter<Hero>();
}
