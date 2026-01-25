import {Component, Input} from '@angular/core';
import {ProductModel} from '../../../api/product/model/product.model';

@Component({
  selector: 'app-product-viewer',
  imports: [],
  templateUrl: './product-viewer.html',
  styleUrl: './product-viewer.css',
})
export class ProductViewer {
  @Input({ required: true }) product!: ProductModel;
}
