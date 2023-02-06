import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTagComponent } from './help-tag.component';

describe('HelpTagComponent', () => {
  let component: HelpTagComponent;
  let fixture: ComponentFixture<HelpTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
