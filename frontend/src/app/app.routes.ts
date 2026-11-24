import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'shops',
    loadComponent: () => import('./pages/shops/shops.component').then(m => m.ShopsComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'catalog',
    loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent)
  },
  {
    path: 'order-builder',
    loadComponent: () => import('./pages/order-builder/order-builder.component').then(m => m.OrderBuilderComponent)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];