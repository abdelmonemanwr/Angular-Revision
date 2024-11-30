import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { InnerComponent } from './inner/inner.component';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [InnerComponent],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef){}

  text1:string="";
  getText(e:Event){
    let target = e.target as HTMLInputElement;
    this.text1 = target.value;
  }

  text2:string="";
  showText(h1:any){
    this.text2 = h1.textContent;
  }

  viewChildText: string = '';
  @ViewChild(InnerComponent) innerComp!: InnerComponent;
  ngAfterViewInit(){
    this.viewChildText=this.innerComp.innertext;
    console.log(this.viewChildText);
    this.cdr.detectChanges();
  }


  viewChildMethod: string = '';
  getViewChildMethod(){
    this.viewChildMethod = this.innerComp.innerMethod('hana');
    console.log(this.viewChildMethod);
  }


}
