import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatCardComponent } from './format-card.component';

describe('FormatCardComponent', () => {
  let component: FormatCardComponent;
  let fixture: ComponentFixture<FormatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
