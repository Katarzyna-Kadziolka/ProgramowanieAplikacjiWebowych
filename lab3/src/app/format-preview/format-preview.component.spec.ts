import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatPreviewComponent } from './format-preview.component';

describe('FormatPreviewComponent', () => {
  let component: FormatPreviewComponent;
  let fixture: ComponentFixture<FormatPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
