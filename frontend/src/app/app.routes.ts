import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';


export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.component').then(c => c.InicioComponent)
  },
  {
    path: 'institucional',
    loadComponent: () => import('./pages/institucional/inicio/inicio.component').then(c => c.InstitucionalInicioComponent) 
  },
  { 
    path: 'carreras', 
    loadComponent: () => import('./pages/carreras/carreras.component').then(c => c.CarrerasComponent) 
  },

  { 
    path: 'estudiantes', 
    loadComponent: () => import('./pages/estudiantes/estudiantes.component').then(c => c.EstudiantesComponent) 
  },
  { 
    path: 'noticias/:id', 
    loadComponent: () => import('./pages/noticias/detalle-noticia/detalle-noticia.component').then(c => c.DetalleNoticiaComponent) 
  },
{
  path: 'admin/noticias', 
  loadComponent: () => import('./components/admin/panel-noticias/panel-noticias.component').then(c => c.PanelNoticiasComponent) 
}
];
