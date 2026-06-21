import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import { ProductsState, CartState, Product, CartItem } from '../../models/product.model';

export const initialProductsState: ProductsState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const initialCartState: CartState = {
  items: [],
  total: 0,
};

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(ProductActions.selectProduct, (state, { productId }) => {
    const selectedProduct = state.products.find((p: Product) => p.id === productId) || null;
    return { ...state, selectedProduct };
  }),
  on(ProductActions.clearSelectedProduct, (state) => ({
    ...state,
    selectedProduct: null,
  }))
);

export const cartReducer = createReducer(
  initialCartState,
  on(ProductActions.addToCart, (state, { item }) => {
    const existingItem = state.items.find(
      (i: CartItem) => i.product.id === item.product.id && i.selectedSize === item.selectedSize
    );
    if (existingItem) {
      const updatedItems = state.items.map((i: CartItem) =>
        i.product.id === item.product.id && i.selectedSize === item.selectedSize
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      );
      const total = updatedItems.reduce((sum: number, i: CartItem) => sum + i.product.price * i.quantity, 0);
      return { items: updatedItems, total };
    }
    const updatedItems = [...state.items, item];
    const total = updatedItems.reduce((sum: number, i: CartItem) => sum + i.product.price * i.quantity, 0);
    return { items: updatedItems, total };
  }),
  on(ProductActions.removeFromCart, (state, { productId }) => {
    const updatedItems = state.items.filter((i: CartItem) => i.product.id !== productId);
    const total = updatedItems.reduce((sum: number, i: CartItem) => sum + i.product.price * i.quantity, 0);
    return { items: updatedItems, total };
  }),
  on(ProductActions.updateQuantity, (state, { productId, quantity }) => {
    if (quantity <= 0) {
      const updatedItems = state.items.filter((i: CartItem) => i.product.id !== productId);
      const total = updatedItems.reduce((sum: number, i: CartItem) => sum + i.product.price * i.quantity, 0);
      return { items: updatedItems, total };
    }
    const updatedItems = state.items.map((i: CartItem) =>
      i.product.id === productId ? { ...i, quantity } : i
    );
    const total = updatedItems.reduce((sum: number, i: CartItem) => sum + i.product.price * i.quantity, 0);
    return { items: updatedItems, total };
  }),
  on(ProductActions.updateSize, (state, { productId, size }) => {
    const updatedItems = state.items.map((i: CartItem) =>
      i.product.id === productId ? { ...i, selectedSize: size } : i
    );
    return { items: updatedItems, total: state.total };
  }),
  on(ProductActions.clearCart, () => initialCartState)
);
