import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFilter {
}
