import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WierzchowiecComponent } from './wierzchowiec.component';

describe('WierzchowiecComponent', () => {
  let component: WierzchowiecComponent;
  let fixture: ComponentFixture<WierzchowiecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WierzchowiecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WierzchowiecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
