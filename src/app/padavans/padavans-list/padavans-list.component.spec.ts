import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadavansListComponent } from './padavans-list.component';

describe('PadavansListComponent', () => {
  let component: PadavansListComponent;
  let fixture: ComponentFixture<PadavansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadavansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadavansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
