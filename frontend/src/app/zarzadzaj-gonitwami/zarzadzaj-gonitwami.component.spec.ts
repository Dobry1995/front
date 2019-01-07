import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZarzadzajGonitwamiComponent } from './zarzadzaj-gonitwami.component';

describe('ZarzadzajGonitwamiComponent', () => {
  let component: ZarzadzajGonitwamiComponent;
  let fixture: ComponentFixture<ZarzadzajGonitwamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZarzadzajGonitwamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZarzadzajGonitwamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
