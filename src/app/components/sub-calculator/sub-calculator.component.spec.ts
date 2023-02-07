import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubCalculatorComponent } from './sub-calculator.component';

describe('SubCalculatorComponent', () => {
  let component: SubCalculatorComponent;
  let fixture: ComponentFixture<SubCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCalculatorComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should substract the values correctly', () => {
    component.calculatorForm.value.number1 = 10;
    component.calculatorForm.value.number2 = 5;

    component.sub();

    expect(component.result).toBe(5);
  });

  it('should be 0 with no arguments', () => {
    component.sub();

    expect(component.result).toBe(0);
  });
});
