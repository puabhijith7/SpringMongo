import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seatavailability1Component } from './seatavailability1.component';

describe('Seatavailability1Component', () => {
  let component: Seatavailability1Component;
  let fixture: ComponentFixture<Seatavailability1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seatavailability1Component]
    });
    fixture = TestBed.createComponent(Seatavailability1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
