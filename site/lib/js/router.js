import templates from './templates';
import Navigo from 'navigo';

var root = null;
var useHash = true; // Defaults to: false
var router = new Navigo(root, useHash);

router
    .on({
        'article/:id': function (params) {
            //  alert('Products'+ params.id);
        },
        'articles': function () {
            //alert('articles');
        },
        '*': function () {
            //alert('Home')
        }
    })
    .resolve();

