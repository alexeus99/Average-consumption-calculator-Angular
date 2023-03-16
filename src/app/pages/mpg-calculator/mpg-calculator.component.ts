import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mpg-calculator',
  templateUrl: './mpg-calculator.component.html',
  styleUrls: ['./mpg-calculator.component.scss'],
})
export class MpgCalculatorComponent implements OnInit {
  form = new FormGroup({
    fromMpg: new FormControl(),
    toLkm: new FormControl(),
  });

  ngOnInit() {
    this.form.controls.fromMpg.valueChanges.subscribe((value) => {
      if (value) {
        const fromValue = Number(this.form.controls.fromMpg.value);
        this.form.controls.toLkm.setValue(
          (378.5 / (fromValue * 1.609)).toFixed(2) 
        );
      }
    });
  }


}
