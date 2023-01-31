import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

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

  sum(){
    let num1: number = +this.calculatorForm.value.number1
    let num2: number = +this.calculatorForm.value.number2

    this.result = num1 + num2;
    console.log(this.checkerCondition(this.result));
  }

  sub(){
    let num1: number = +this.calculatorForm.value.number1
    let num2: number = +this.calculatorForm.value.number2

    this.result = num1 - num2;
  }

  multiply(){
    let num1: number = +this.calculatorForm.value.number1
    let num2: number = +this.calculatorForm.value.number2

    this.result = num1 * num2;
  }

  divide(){
    let num1: number = +this.calculatorForm.value.number1
    let num2: number = +this.calculatorForm.value.number2

    this.result = num1 / num2;
  }

  checkerCondition(val:number):boolean{
    return (val >= 1 && val <= 10 && (val % 2 != 0));
  }

}
