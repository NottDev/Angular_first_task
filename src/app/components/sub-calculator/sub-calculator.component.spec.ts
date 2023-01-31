import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCalculatorComponent } from './sub-calculator.component';

describe('SubCalculatorComponent', () => {
  let component: SubCalculatorComponent;
  let fixture: ComponentFixture<SubCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCalculatorComponent ]
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
});
