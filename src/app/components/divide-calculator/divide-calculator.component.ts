import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-divide-calculator',
  templateUrl: './divide-calculator.component.html',
  styleUrls: ['./divide-calculator.component.css']
})
export class DivideCalculatorComponent implements OnInit {

  calculatorForm: FormGroup;
  result: number = 0;

  constructor( private formBuilder: FormBuilder) {
    this.calculatorForm = this.formBuilder.group(
      {
        number1: ["", Validators.required],
        number2 :["", Validators.required]
      }
    )
  }

  ngOnInit(): void {}

  divide(){
    let num1: number = +this.calculatorForm.value.number1
    let num2: number = +this.calculatorForm.value.number2

    if (num2 == 0) {
      this.result = 0;
    } else {
      this.result = num1 / num2;
    }
  }
}
