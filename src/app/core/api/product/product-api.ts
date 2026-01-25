import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {ProductModel} from './model/product.model';
import {Page} from '../page.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${globalThis.location.origin}/api`;

  getProduct(page: number, size: number): Observable<Page<ProductModel>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http
      .get<Page<ProductModel>>(`${this.apiUrl}/product`, { params })
      .pipe(catchError(this.handleError))
  }


  private handleError(error: HttpErrorResponse) {
    console.error('[ProductApi]', error);

    return throwError(() => {
      throw new Error('Something went wrong. Please try again later.')
    });
  }

}
