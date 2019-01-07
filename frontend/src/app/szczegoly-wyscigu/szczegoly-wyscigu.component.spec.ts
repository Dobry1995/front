import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolyWysciguComponent } from './szczegoly-wyscigu.component';

describe('SzczegolyWysciguComponent', () => {
  let component: SzczegolyWysciguComponent;
  let fixture: ComponentFixture<SzczegolyWysciguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzczegolyWysciguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzczegolyWysciguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
