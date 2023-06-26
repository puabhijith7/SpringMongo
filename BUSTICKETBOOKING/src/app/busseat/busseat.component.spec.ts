import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusseatComponent } from './busseat.component';

describe('BusseatComponent', () => {
  let component: BusseatComponent;
  let fixture: ComponentFixture<BusseatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusseatComponent]
    });
    fixture = TestBed.createComponent(BusseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
