import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideCalculatorComponent } from './divide-calculator.component';

describe('DivideCalculatorComponent', () => {
  let component: DivideCalculatorComponent;
  let fixture: ComponentFixture<DivideCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivideCalculatorComponent ]
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
});
