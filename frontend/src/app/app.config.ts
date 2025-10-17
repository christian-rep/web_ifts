import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()), // ✅ Nuevo: Input Binding para rutas
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true // ✅ Nuevo en v19
      })
    ),
    provideHttpClient(withFetch()) // ✅ Fetch por defecto
  ]
};
