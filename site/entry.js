import './lib/css/bootstrap.min.css';
import './lib/css/main.css';

import bootstrap from 'bootstrap';
import router from './lib/js/router';
import builder from './lib/js/NavAndFooter';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then((registration) => {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch((error) => {
      console.log('Service worker registration failed, error:', error);
    });
}

builder.buildBoth();