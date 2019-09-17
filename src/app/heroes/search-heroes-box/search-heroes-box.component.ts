import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngsw-search-heroes-box',
  templateUrl: './search-heroes-box.component.html',
  styleUrls: ['./search-heroes-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchHeroesBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
