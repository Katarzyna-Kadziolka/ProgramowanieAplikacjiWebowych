import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingBoxComponent } from './spending-box.component';

describe('AppSpendingBoxComponent', () => {
  let component: SpendingBoxComponent;
  let fixture: ComponentFixture<SpendingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendingBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
