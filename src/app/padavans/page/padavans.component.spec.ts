import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadavansComponent } from './padavans.component';

describe('PadavansComponent', () => {
  let component: PadavansComponent;
  let fixture: ComponentFixture<PadavansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadavansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadavansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
