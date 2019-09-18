import {
  Component,
  ChangeDetectionStrategy,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Padavan, PadavanRequiredProps } from '../padavans.interface';

@Component({
  selector: 'ngsw-padavan-form',
  templateUrl: './padavan-form.component.html',
  styleUrls: ['./padavan-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PadavanFormComponent {
  originalPadavan: Padavan | undefined;
  @Output() save = new EventEmitter<Padavan | PadavanRequiredProps>();

  padavanForm = new FormGroup({
    name: new FormControl('')
  });

  @Input()
  set padavan(padavan: Padavan) {
    this.padavanForm.reset();
    this.originalPadavan = null;

    if (padavan) {
      this.padavanForm.setValue({
        name: padavan.name
      });

      this.originalPadavan = padavan;
    }
  }

  onSubmit(padavan: Padavan) {
    this.save.emit({ ...this.originalPadavan, ...padavan });
  }
}
