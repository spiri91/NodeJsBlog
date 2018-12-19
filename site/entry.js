import './lib/css/awn.css';
import './lib/css/bootstrap.min.css';

import bootstrap from 'bootstrap';
import router from './lib/js/router';
import builder from './lib/js/navAndFooter';
import nott from './lib/js/notifications'

window.sw = null;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then((registration) => {
      nott.init(registration);

      window.sw = registration;
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch((error) => {
      console.log('Service worker registration failed, error:', error);
    });
}

builder.buildBoth();