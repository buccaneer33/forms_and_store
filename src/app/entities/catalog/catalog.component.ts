import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe, CurrencyPipe, SlicePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as ProductActions from '../../store/actions/product.actions';
import * as ProductSelectors from '../../store/selectors/product.selectors';
import { Product, CartItem } from '../../models/product.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, SlicePipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);

  products$: Observable<Product[]> = this.store.select(ProductSelectors.selectAllProducts);
  loading$: Observable<boolean> = this.store.select(ProductSelectors.selectProductsLoading);

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }

  selectProduct(productId: string): void {
    this.store.dispatch(ProductActions.selectProduct({ productId }));
    this.router.navigate(['/product', productId]);
  }

  trackByProductId(_index: number, product: Product): string {
    return product.id;
  }
}
