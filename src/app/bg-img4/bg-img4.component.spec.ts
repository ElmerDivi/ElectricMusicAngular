import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgImg4Component } from './bg-img4.component';

describe('BgImg4Component', () => {
  let component: BgImg4Component;
  let fixture: ComponentFixture<BgImg4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgImg4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgImg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
