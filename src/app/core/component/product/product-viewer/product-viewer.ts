import {Component, input} from '@angular/core';
import {ProductModel} from '../../../api/product/model/product.model';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-product-viewer',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardImage,
  ],
  templateUrl: './product-viewer.html',
  styleUrl: './product-viewer.css',
})
export class ProductViewer {
  readonly product = input.required<ProductModel>()
}
