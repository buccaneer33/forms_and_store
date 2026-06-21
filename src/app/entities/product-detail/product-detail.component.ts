import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AsyncPipe, CurrencyPipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import * as ProductActions from '../../store/actions/product.actions';
import * as ProductSelectors from '../../store/selectors/product.selectors';
import { Product, CartItem, Size } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  product$: Observable<Product | null> = this.store.select(ProductSelectors.selectSelectedProduct);
  selectedSize: Size | null = null;
  quantity = 1;

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.store.dispatch(ProductActions.selectProduct({ productId }));
    }
  }

  goBack(): void {
    this.store.dispatch(ProductActions.clearSelectedProduct());
    this.router.navigate(['/']);
  }

  addToCart(product: Product): void {
    if (!this.selectedSize) return;
    const item: CartItem = {
      product,
      quantity: this.quantity,
      selectedSize: this.selectedSize,
    };
    this.store.dispatch(ProductActions.addToCart({ item }));
    this.router.navigate(['/cart']);
  }
}
