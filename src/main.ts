<<<<<<< HEAD
import { bootstrapApplication } from "@angular/platform-browser"
import { provideRouter } from "@angular/router"
import { AppComponent } from "./app/app.component"
import { routes } from "./app/app.routes"

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err))
=======
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimationsAsync()]
});
>>>>>>> a93465fc2550ffd74eca08cdbb708efd4b88e1ac
