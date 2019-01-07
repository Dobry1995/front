import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JakGracComponent } from './jak-grac.component';

describe('JakGracComponent', () => {
  let component: JakGracComponent;
  let fixture: ComponentFixture<JakGracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JakGracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JakGracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
