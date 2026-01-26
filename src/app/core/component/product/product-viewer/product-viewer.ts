import {Component, input} from '@angular/core';
import {ProductModel} from '../../../api/product/model/product.model';
import {MatCardImage} from '@angular/material/card';

@Component({
  selector: 'app-product-viewer',
  imports: [
    MatCardImage,
  ],
  templateUrl: './product-viewer.html',
  styleUrl: './product-viewer.css',
})
export class ProductViewer {
  readonly product = input.required<ProductModel>()
}
