import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sum the values correctly', () => {
    component.calculatorForm.value.number1 = 5;
    component.calculatorForm.value.number2 = 10;

    component.sum();

    expect(component.result).toBe(15);
  });

  it('should be 0 with no arguments', () => {
    component.sum();

    expect(component.result).toBe(0);
  });
});
