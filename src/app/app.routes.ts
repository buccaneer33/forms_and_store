import { Routes } from '@angular/router';
import { CatalogComponent } from './entities/catalog/catalog.component';
import { ProductDetailComponent } from './entities/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  /*{
    path: '', component: CatalogComponent
  },*/
  {
    path: 'product/:id', component: ProductDetailComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'commodity',
    loadChildren: () => import('./pages/commodity/commodity.routes').then(m => m.CommodityRoutes)
  },
  {
    path: '',
    loadChildren: () => import('./pages/journal/journal.routes').then(m => m.JournalRoutes)
  },
  {
    path: '**', redirectTo: ''
  },
];
