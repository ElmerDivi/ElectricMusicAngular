import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtUs6Component } from './abt-us6.component';

describe('AbtUs6Component', () => {
  let component: AbtUs6Component;
  let fixture: ComponentFixture<AbtUs6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbtUs6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtUs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
