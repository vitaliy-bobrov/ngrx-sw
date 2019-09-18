import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadavansListItemComponent } from './padavans-list-item.component';

describe('PadavansListItemComponent', () => {
  let component: PadavansListItemComponent;
  let fixture: ComponentFixture<PadavansListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadavansListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadavansListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
