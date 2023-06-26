import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserseachComponent } from './userseach.component';

describe('UserseachComponent', () => {
  let component: UserseachComponent;
  let fixture: ComponentFixture<UserseachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserseachComponent]
    });
    fixture = TestBed.createComponent(UserseachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
