import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedCssCardComponent } from './generated-css-card.component';

describe('GeneratedCssCardComponent', () => {
  let component: GeneratedCssCardComponent;
  let fixture: ComponentFixture<GeneratedCssCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedCssCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedCssCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
