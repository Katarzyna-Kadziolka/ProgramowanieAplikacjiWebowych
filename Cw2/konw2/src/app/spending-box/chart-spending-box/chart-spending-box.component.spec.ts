import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSpendingBoxComponent } from './chart-spending-box.component';

describe('ChartSpendingBoxComponent', () => {
  let component: ChartSpendingBoxComponent;
  let fixture: ComponentFixture<ChartSpendingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartSpendingBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartSpendingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
