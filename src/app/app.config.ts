import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideKeycloak} from 'keycloak-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloak({
      config: {
        url: '',
        realm: '',
        clientId: '',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
      }
    }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
