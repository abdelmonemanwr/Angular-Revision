import { myProducts } from './../../../models/ProductList';
import { Component } from '@angular/core';
import { IProducts } from '../../../interfaces/iproducts';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})



export class ControlFlowComponent {
  products: IProducts[] = [];
  constructor(){
    this.products = myProducts;
  }
}
