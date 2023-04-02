import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatInputComponent } from './format-input.component';

describe('FormatInputComponent', () => {
  let component: FormatInputComponent;
  let fixture: ComponentFixture<FormatInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
