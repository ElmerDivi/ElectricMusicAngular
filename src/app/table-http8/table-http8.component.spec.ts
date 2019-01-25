import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHttp8Component } from './table-http8.component';

describe('TableHttp8Component', () => {
  let component: TableHttp8Component;
  let fixture: ComponentFixture<TableHttp8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHttp8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHttp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
