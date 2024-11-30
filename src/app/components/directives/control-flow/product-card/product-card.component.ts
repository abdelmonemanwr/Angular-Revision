import { Component, Input, input } from '@angular/core';
import { IProducts } from '../../../../interfaces/iproducts';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() myProduct: IProducts = {
    Pid: 0,
    Pname: '',
    Pdesc: '',
    Pprice: 0,
    Pquantity: 0,
    PimageUrl: '',
  };
}
