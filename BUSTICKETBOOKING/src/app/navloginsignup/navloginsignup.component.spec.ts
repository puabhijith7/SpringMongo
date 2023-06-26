import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavloginsignupComponent } from './navloginsignup.component';

describe('NavloginsignupComponent', () => {
  let component: NavloginsignupComponent;
  let fixture: ComponentFixture<NavloginsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavloginsignupComponent]
    });
    fixture = TestBed.createComponent(NavloginsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
