import Navigo from 'navigo';
import templates from './templates';
import call from './call';

let root = null;
let useHash = true;
let router = new Navigo(root, useHash);

router
  .on({
    'article/i/:id': params => call.getOneById(params.id).then(templates.showArticle),
    'article/s/:smug': params => call.getOneBySmug(params.smug).then(templates.showArticle),
    'article/create': () => templates.createArticle(),
    'article/:id/edit': params => call.getOneById(params.id).then(templates.articleEdit),
    'page/:number': params => call.getPage(params.number).then(templates.showStartPage),
    '*': () => call.getPage(1).then(templates.showStartPage)
  })
  .resolve();
