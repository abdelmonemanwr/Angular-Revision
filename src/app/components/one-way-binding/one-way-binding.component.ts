import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-one-way-binding',
  standalone: true,
  imports: [],
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.css'
})
export class OneWayBindingComponent {
  title:string = "Our Meals";
  owner:string = "Owner: Men3m";
  img:string = '5.jpg';
  imageSource:string = 'assets/images/4.jpg';
  imageSource2:string = 'assets/images/3.jpg';
  imageSource3:string = 'assets/images/2.jpg';
  imageSource4:string = 'assets/images/1.jpg';
}
