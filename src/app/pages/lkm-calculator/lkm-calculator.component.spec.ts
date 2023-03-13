import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LkmCalculatorComponent } from './lkm-calculator.component';

describe('LkmCalculatorComponent', () => {
  let component: LkmCalculatorComponent;
  let fixture: ComponentFixture<LkmCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LkmCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LkmCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
