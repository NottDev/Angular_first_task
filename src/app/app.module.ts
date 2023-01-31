import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SubCalculatorComponent } from './components/sub-calculator/sub-calculator.component';
import { MultiplyCalculatorComponent } from './components/multiply-calculator/multiply-calculator.component';
import { DivideCalculatorComponent } from './components/divide-calculator/divide-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SubCalculatorComponent,
    MultiplyCalculatorComponent,
    DivideCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
