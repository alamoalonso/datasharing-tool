import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UDropdownCheckboxComponent } from './u-dropdown-checkbox.component';

describe('UDropdownCheckboxComponent', () => {
  let component: UDropdownCheckboxComponent;
  let fixture: ComponentFixture<UDropdownCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UDropdownCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UDropdownCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
