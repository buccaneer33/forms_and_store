import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as ProductActions from '../../store/actions/product.actions';
import * as ProductSelectors from '../../store/selectors/product.selectors';
import { CartItem, Size } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  private store = inject(Store);
  private router = inject(Router);

  items$: Observable<CartItem[]> = this.store.select(ProductSelectors.selectCartItems);
  total$: Observable<number> = this.store.select(ProductSelectors.selectCartTotal);
  itemCount$: Observable<number> = this.store.select(ProductSelectors.selectCartItemCount);

  removeFromCart(productId: string): void {
    this.store.dispatch(ProductActions.removeFromCart({ productId }));
  }

  updateQuantity(productId: string, quantity: number): void {
    this.store.dispatch(ProductActions.updateQuantity({ productId, quantity }));
  }

  updateSize(productId: string, size: Size): void {
    this.store.dispatch(ProductActions.updateSize({ productId, size }));
  }

  clearCart(): void {
    this.store.dispatch(ProductActions.clearCart());
  }

  goShopping(): void {
    this.router.navigate(['/']);
  }
}
