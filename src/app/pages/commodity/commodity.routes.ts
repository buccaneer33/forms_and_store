import { Route } from '@angular/router';
import { Commodity } from './commodity';

export const CommodityRoutes: Route[] = [
  {
    path: '',
    component: Commodity,
    children: [
      {
        path: ':id',
        component: Commodity,
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]
