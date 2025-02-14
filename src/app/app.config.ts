import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
<<<<<<< HEAD
import { provideHttpClient, withInterceptors } from '@angular/common/http';
=======
import { provideHttpClient } from '@angular/common/http';
>>>>>>> CreateServices

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()),
  ]
};
