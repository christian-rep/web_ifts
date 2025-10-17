import { Routes } from '@angular/router';

export const NOTICIAS_ROUTES: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./lista-noticias/lista-noticias.component').then(c => c.ListaNoticiasComponent) 
  },
  { 
    path: ':id', 
    loadComponent: () => import('./detalle-noticia/detalle-noticia.component').then(c => c.DetalleNoticiaComponent) 
  }
];
