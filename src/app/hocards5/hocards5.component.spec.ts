import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hocards5Component } from './hocards5.component';

describe('Hocards5Component', () => {
  let component: Hocards5Component;
  let fixture: ComponentFixture<Hocards5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hocards5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hocards5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
