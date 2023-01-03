import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseListComponent } from './use-case-list.component';

describe('UseCaseListComponent', () => {
  let component: UseCaseListComponent;
  let fixture: ComponentFixture<UseCaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseCaseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
