import { environment } from '../../../environments/environment';

import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Product } from '../models/my-products.models';
import { MyProductsComponent } from '../page/my-products/component/my-products.component';

@Injectable({
  providedIn: 'root',
})
export class MyProdoctsService {
  constructor(private http: HttpClient, private router: Router) {}
  public products!: Product[];
  baseUrl = environment.baseUrl + '/my-products';

  getAll(){
    return this.products = [
      {
        id: 1,
        title: 'MacBook Pro 2021 16',
        description:
          'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
        price: 'R$ 17.499,00',
        data: '26/05/2018',
        categories: {
          category: [
            {
              id: 1,
              name: 'Macbook',
            },
            {
              id: 2,
              name: 'Apple',
            },
          ],
        },
      },
      {
        id: 2,
        title: 'MacBook Pro 2021 16',
        description:
          'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
        price: 'R$ 17.499,00',
        data: '26/05/2018',
        categories: {
          category: [
            {
              id: 1,
              name: 'Macbook',
            },
            {
              id: 2,
              name: 'Apple',
            },
          ],
        },
      },
      {
        id: 3,
        title: 'MacBook Pro 2021 16',
        description:
          'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
        price: 'R$ 17.499,00',
        data: '26/05/2018',
        categories: {
          category: [
            {
              id: 1,
              name: 'Macbook',
            },
            {
              id: 2,
              name: 'Apple',
            },
          ],
        },
      },
      {
        id: 4,
        title: 'MacBook Pro 2021 16',
        description:
          'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
        price: 'R$ 17.499,00',
        data: '26/05/2018',
        categories: {
          category: [
            {
              id: 1,
              name: 'Macbook',
            },
            {
              id: 2,
              name: 'Apple',
            },
          ],
        },
      },
    ];
  }

  newProduct(product : Product){
    this.products.push(product);
    return this.products;
  }

  
/*   NewProduct(product: any) {
    return this.http.post<any>(this.baseUrl, product);
  }

  DeleteProducts(id: any) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  UpdateProduct(product: any) {
    return this.http
      .put(`${this.baseUrl}/my-products/${product.id}`, product)
      .pipe(catchError(this.handleError))
      .toPromise();
  } */

  private handleError(error: HttpErrorResponse) {
    // TODO: consultar se o erro 404 vai indicar que um colaborador nao foi encontrado ou se o endpoint nao foi encontrado
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
