import { createAction, props } from '@ngrx/store';
import { Product, CartItem, Size } from '../../models/product.model';

// Products actions
export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

export const selectProduct = createAction(
  '[Products] Select Product',
  props<{ productId: string }>()
);
export const clearSelectedProduct = createAction('[Products] Clear Selected Product');

// Cart actions
export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ item: CartItem }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: string }>()
);
export const updateQuantity = createAction(
  '[Cart] Update Quantity',
  props<{ productId: string; quantity: number }>()
);
export const updateSize = createAction(
  '[Cart] Update Size',
  props<{ productId: string; size: Size }>()
);
export const clearCart = createAction('[Cart] Clear Cart');
