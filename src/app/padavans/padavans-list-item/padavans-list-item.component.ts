import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Padavan } from '../padavans.interface';

@Component({
  selector: 'ngsw-padavans-list-item',
  templateUrl: './padavans-list-item.component.html',
  styleUrls: ['./padavans-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PadavansListItemComponent {
  @Input() padavan: Padavan[] = [];
  @Output() edit = new EventEmitter<Padavan>();
}
