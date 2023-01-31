import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyCalculatorComponent } from './multiply-calculator.component';

describe('MultiplyCalculatorComponent', () => {
  let component: MultiplyCalculatorComponent;
  let fixture: ComponentFixture<MultiplyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplyCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
