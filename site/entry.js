import bootstrap from 'bootstrap';
import './lib/css/bootstrap.min.css';
import './lib/css/main.css';
import router from './lib/js/router';
import builder from './lib/js/NavAndFooter';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(function(registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service worker registration failed, error:', error);
        });
}

builder.buildBoth();