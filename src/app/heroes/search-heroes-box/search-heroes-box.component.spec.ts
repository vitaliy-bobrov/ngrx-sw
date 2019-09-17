import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeroesBoxComponent } from './search-heroes-box.component';

describe('SearchHeroesBoxComponent', () => {
  let component: SearchHeroesBoxComponent;
  let fixture: ComponentFixture<SearchHeroesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHeroesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeroesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
