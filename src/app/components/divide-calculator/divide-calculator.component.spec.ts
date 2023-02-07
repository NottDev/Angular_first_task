import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DivideCalculatorComponent } from './divide-calculator.component';

describe('DivideCalculatorComponent', () => {
  let component: DivideCalculatorComponent;
  let fixture: ComponentFixture<DivideCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivideCalculatorComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivideCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should divide the values correctly', () => {
    component.calculatorForm.value.number1 = 10;
    component.calculatorForm.value.number2 = 5;

    component.divide();

    expect(component.result).toBe(2);
  });

  it('should be 0 if denominator is 0', () => {
    component.calculatorForm.value.number1 = 5;
    component.calculatorForm.value.number2 = 0;

    component.divide();

    expect(component.result).toBe(0);
  });

  it('should be 0 with no arguments', () => {
    component.divide();

    expect(component.result).toBe(0);
  });
});
