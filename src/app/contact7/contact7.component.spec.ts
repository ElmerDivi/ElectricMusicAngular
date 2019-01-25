import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact7Component } from './contact7.component';

describe('Contact7Component', () => {
  let component: Contact7Component;
  let fixture: ComponentFixture<Contact7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contact7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contact7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
