import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  curImageIdx: number = 0;
  imageList: string[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
  ];
  imageSource: string = this.imageList[this.curImageIdx];
  GetNextImage(){
    this.curImageIdx=((this.curImageIdx+1)%this.imageList.length);
    this.imageSource= this.imageList[this.curImageIdx];
  }
  GetPreviousImage(){
    this.curImageIdx=((this.curImageIdx-1)%this.imageList.length);
    this.imageSource= this.imageList[this.curImageIdx];
  }
}
