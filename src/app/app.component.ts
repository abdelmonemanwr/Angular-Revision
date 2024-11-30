import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { OneWayBindingComponent } from './components/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsBindingComponent } from './components/forms-binding/forms-binding.component';
import { CheckDirectivesComponent } from './components/directives/check-directives/check-directives.component';
import { ControlFlowComponent } from './components/directives/control-flow/control-flow.component';
import { Parent2ChildComponent } from "./components/sendingDataBetweenComponents/parent2-child/parent2-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SliderComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    FormsBindingComponent,
    CheckDirectivesComponent,
    ControlFlowComponent,
    Parent2ChildComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientApp';
}
