import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UDropdownRadioComponent } from './u-dropdown-radio.component';

describe('UDropdownRadioComponent', () => {
  let component: UDropdownRadioComponent;
  let fixture: ComponentFixture<UDropdownRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UDropdownRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UDropdownRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
