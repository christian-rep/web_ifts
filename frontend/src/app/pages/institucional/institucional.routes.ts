import { Routes } from '@angular/router';

export const INSTITUCIONAL_ROUTES: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./inicio/inicio.component').then(c => c.InicioComponent) 
  },
  { 
    path: 'historia', 
    loadComponent: () => import('./historia/historia.component').then(c => c.HistoriaComponent) 
  },
  { 
    path: 'autoridades', 
    loadComponent: () => import('./autoridades/autoridades.component').then(c => c.AutoridadesComponent) 
  }
];
