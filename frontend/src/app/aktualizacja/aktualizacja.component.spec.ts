import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktualizacjaComponent } from './aktualizacja.component';

describe('AktualizacjaComponent', () => {
  let component: AktualizacjaComponent;
  let fixture: ComponentFixture<AktualizacjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktualizacjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktualizacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
