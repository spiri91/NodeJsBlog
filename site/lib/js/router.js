import Navigo from 'navigo';
import templates from './templates';
import startingObj from './startingObject';

let root = null;
let useHash = true; // Defaults to: false
let router = new Navigo(root, useHash);

router
  .on({
    'article/:id': function (params) {
      //  alert('Products'+ params.id);
    },
    'article/create': function () {
      // alert('articles');
    },
    '*': () => {templates.showStartPage(startingObj); }
  })
  .resolve();
