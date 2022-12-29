import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseLibraryComponent } from './use-case-library.component';

describe('UseCaseLibraryComponent', () => {
  let component: UseCaseLibraryComponent;
  let fixture: ComponentFixture<UseCaseLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseCaseLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseCaseLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
