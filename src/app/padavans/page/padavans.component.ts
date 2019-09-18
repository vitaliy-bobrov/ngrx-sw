import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';

import { Padavan } from '../padavans.interface';
import { PadavansService } from '../service/padavans.service';

@Component({
  selector: 'ngsw-padavans',
  templateUrl: './padavans.component.html',
  styleUrls: ['./padavans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PadavansComponent {
  padavans$: Observable<Padavan[]>;
  selectedPadavan$: Observable<Padavan>;

  constructor(private service: PadavansService) {}

  onPadavanEdit(padavan: Padavan) {

  }

  onPadavanSave(padavan: Padavan) {

  }

}
