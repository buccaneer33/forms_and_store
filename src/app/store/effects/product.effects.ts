import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of, tap } from 'rxjs';
import * as ProductActions from '../actions/product.actions';
import { ProductsService } from '../../services/products.service';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private productsService = inject(ProductsService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => ProductActions.loadProductsSuccess({ products })),
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  selectProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.selectProduct),
      mergeMap(({ productId }) =>
        this.productsService.getProductById(productId).pipe(
          map((product) =>
            product
              ? ProductActions.selectProduct({ productId })
              : ProductActions.loadProductsFailure({ error: 'Product not found' })
          ),
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
