import {Component, computed, inject, signal} from '@angular/core';
import {ProductApi} from '../../core/api/product/product-api';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {switchMap} from 'rxjs';
import {ProductViewer} from '../../core/component/product/product-viewer/product-viewer';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {ProductFilter} from '../../core/component/product-filter/product-filter';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';

@Component({
  selector: 'app-product',
  imports: [
    ProductViewer,
    MatPaginatorModule,
    ProductFilter,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent
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
  protected readonly totalElements = computed(() => this.pageResult()?.totalElements ?? 0)

  handlePageEvent(e: PageEvent) {
    this.page.update(() => e.pageIndex)
    this.size.update(() => e.pageSize)
  }


}
