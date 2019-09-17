import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngsw-heroes-list-item',
  templateUrl: './heroes-list-item.component.html',
  styleUrls: ['./heroes-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
