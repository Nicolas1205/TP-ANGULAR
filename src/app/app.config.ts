import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CartController } from './controller/cart.controller';

export const appConfig: ApplicationConfig = {
  providers: [ { provide: CartController } ,provideRouter(routes)]
};
