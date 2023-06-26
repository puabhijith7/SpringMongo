import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftreloginsearchComponent } from './aftreloginsearch.component';

describe('AftreloginsearchComponent', () => {
  let component: AftreloginsearchComponent;
  let fixture: ComponentFixture<AftreloginsearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AftreloginsearchComponent]
    });
    fixture = TestBed.createComponent(AftreloginsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
