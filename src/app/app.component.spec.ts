import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DivideCalculatorComponent } from './components/divide-calculator/divide-calculator.component';
import { MultiplyCalculatorComponent } from './components/multiply-calculator/multiply-calculator.component';
import { SubCalculatorComponent } from './components/sub-calculator/sub-calculator.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent,
        CalculatorComponent,
        SubCalculatorComponent,
        MultiplyCalculatorComponent,
        DivideCalculatorComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture?.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'basicCalculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('basicCalculator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture?.detectChanges();
    const compiled = fixture?.nativeElement as HTMLElement;
    const text = compiled?.querySelector('div h1')?.textContent;
    expect(text).toContain('CalcuLog');
  });
});
