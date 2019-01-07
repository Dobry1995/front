import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GonitwyComponent } from './gonitwy.component';

describe('GonitwyComponent', () => {
  let component: GonitwyComponent;
  let fixture: ComponentFixture<GonitwyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GonitwyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GonitwyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
