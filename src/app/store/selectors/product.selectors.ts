import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, CartState, CartItem, Product } from '../../models/product.model';

export const selectProductsState = createFeatureSelector<ProductsState>('products');
export const selectCartState = createFeatureSelector<CartState>('cart');

// Products selectors
export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state: ProductsState) => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
);

export const selectSelectedProduct = createSelector(
  selectProductsState,
  (state: ProductsState) => state.selectedProduct
);

export const selectProductsByCategory = (category: string) =>
  createSelector(selectAllProducts, (products: Product[]) =>
    products.filter((p: Product) => p.category === category)
  );

export const selectNewProducts = createSelector(
  selectAllProducts,
  (products: Product[]) => products.filter((p: Product) => p.isNew)
);

// Cart selectors
export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectCartTotal = createSelector(
  selectCartState,
  (state: CartState) => state.total
);

export const selectCartItemCount = createSelector(
  selectCartItems,
  (items: CartItem[]) => items.reduce((count: number, item: CartItem) => count + item.quantity, 0)
);

export const selectItemInCart = (productId: string) =>
  createSelector(selectCartItems, (items: CartItem[]) =>
    items.find((i: CartItem) => i.product.id === productId) || null
  );
