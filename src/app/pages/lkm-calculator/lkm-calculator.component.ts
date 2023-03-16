import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lkm-calculator',
  templateUrl: './lkm-calculator.component.html',
  styleUrls: ['./lkm-calculator.component.scss'],
})
export class LkmCalculatorComponent implements OnInit {
  refueled: Number = 0;
  distance: Number = 0;

  form = new FormGroup({
    refueled: new FormControl(),
    distance: new FormControl(),
    consumption: new FormControl(),
  });

  ngOnInit() {
    this.form.controls.refueled.valueChanges.subscribe((value) => {
      if (value) {
        console.log(value);
        this.refueled = Number(this.form.controls.refueled.value);
      }
    });

    this.form.controls.distance.valueChanges.subscribe((value) => {
      if (value) {
        this.distance = Number(this.form.controls.distance.value);
        this.getValues();
        console.log(value);
      }
    });
  }

  getValues() {
    const value3 = (
      (Number(this.refueled) / Number(this.distance)) *
      100
    ).toFixed(1);
    this.form.controls.consumption.setValue(value3);
  }
}
