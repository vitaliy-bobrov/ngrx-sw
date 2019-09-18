import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Padavan } from '../padavans.interface';

@Component({
  selector: 'ngsw-padavans-list',
  templateUrl: './padavans-list.component.html',
  styleUrls: ['./padavans-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PadavansListComponent {
  @Input() padavans: Padavan[];
  @Output() edit = new EventEmitter<Padavan>();
}
