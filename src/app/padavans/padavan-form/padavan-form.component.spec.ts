import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadavanFormComponent } from './padavan-form.component';

describe('PadavanFormComponent', () => {
  let component: PadavanFormComponent;
  let fixture: ComponentFixture<PadavanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadavanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadavanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
