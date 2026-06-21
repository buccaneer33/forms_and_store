export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
  sizes: Size[];
  ageRange: string;
  gender: 'boy' | 'girl' | 'unisex';
  rating: number;
  isNew: boolean;
}

export type ProductCategory =
  | 't-shirts'
  | 'dresses'
  | 'pants'
  | 'outerwear'
  | 'shoes'
  | 'accessories';

export type Size = '80' | '86' | '92' | '98' | '104' | '110' | '116' | '122' | '128' | '134' | '140' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: Size;
}

export interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export interface AppState {
  products: ProductsState;
  cart: CartState;
}
