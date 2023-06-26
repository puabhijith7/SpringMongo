import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollimageComponent } from './scrollimage.component';

describe('ScrollimageComponent', () => {
  let component: ScrollimageComponent;
  let fixture: ComponentFixture<ScrollimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollimageComponent]
    });
    fixture = TestBed.createComponent(ScrollimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
