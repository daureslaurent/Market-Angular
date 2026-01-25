import {Component, computed, inject, signal} from '@angular/core';
import {ProductApi} from '../../core/api/product/product-api';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {MatButton} from '@angular/material/button';
import {switchMap} from 'rxjs';
import {ProductViewer} from '../../core/component/product/product-viewer/product-viewer';

@Component({
  selector: 'app-product',
  imports: [
    MatButton,
    ProductViewer
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  private readonly apiProduct = inject(ProductApi);

  // Paging
  protected readonly page = signal(0);
  protected readonly size = signal(5);

  private readonly pageRequest = toObservable(
    computed(() => ({
      page: this.page(),
      size: this.size()
    }))
  );

  private readonly pageResult = toSignal(
    this.pageRequest.pipe(
      switchMap(({ page, size }) =>
        this.apiProduct.getProduct(page, size)
      )
    ),
    { initialValue: null }
  );

  protected readonly products = computed(() => this.pageResult()?.content ?? [])
  protected readonly totalPage = computed(() => this.pageResult()?.totalPages ?? 0)

  nextPage() {
    this.page.update(p => Math.min(Math.max(0, this.totalPage() - 1), p + 1))
  }

  prevPage() {
    this.page.update(p => Math.max(0, p - 1))
  }

}
