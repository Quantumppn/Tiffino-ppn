import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // ✅ fix

=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> a93465fc2550ffd74eca08cdbb708efd4b88e1ac
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(FormsModule) // ✅ fix
  ]
=======
  providers: [provideRouter(routes), provideClientHydration(),ReactiveFormsModule]
>>>>>>> a93465fc2550ffd74eca08cdbb708efd4b88e1ac
};
