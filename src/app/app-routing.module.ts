import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LkmCalculatorComponent } from './pages/lkm-calculator/lkm-calculator.component';
import { MainComponent } from './pages/main/main.component';
import { MpgCalculatorComponent } from './pages/mpg-calculator/mpg-calculator.component';
import {OptionSelectorComponent} from './pages/option-selector/option-selector.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'app-option-selector', component: OptionSelectorComponent },
  { path: 'app-mpg-calculator', component: MpgCalculatorComponent},
  {path: 'app-lkm-calculator', component: LkmCalculatorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
