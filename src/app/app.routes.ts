import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page/home/home')
      .then((m) => m.Home)
  },
  {
    path: "products",
    loadComponent: () => import('./page/product/product')
      .then((m) => m.Product)
  },
  {
    path: "**",
    loadComponent: () => import('./page/not-found/not-found')
      .then((m) => m.NotFound)
  },

];
