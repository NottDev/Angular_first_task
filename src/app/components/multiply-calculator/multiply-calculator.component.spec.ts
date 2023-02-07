import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MultiplyCalculatorComponent } from './multiply-calculator.component';

describe('MultiplyCalculatorComponent', () => {
  let component: MultiplyCalculatorComponent;
  let fixture: ComponentFixture<MultiplyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplyCalculatorComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
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

  it('should multiply the values correctly', () => {
    component.calculatorForm.value.number1 = 10;
    component.calculatorForm.value.number2 = 5;

    component.multiply();

    expect(component.result).toBe(50);
  });

  it('should be 0 with no arguments', () => {
    component.multiply();

    expect(component.result).toBe(0);
  });
});
