import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiply-calculator',
  templateUrl: './multiply-calculator.component.html',
  styleUrls: ['./multiply-calculator.component.css']
})
export class MultiplyCalculatorComponent implements OnInit {

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

  ngOnInit(): void {
  }

  multiply(){
    let num1: number = +this.calculatorForm.value.number1
    let num2: number = +this.calculatorForm.value.number2

    this.result = num1 * num2;
  }
}
