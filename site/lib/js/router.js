import Navigo from 'navigo';
import _ from 'underscore';
import templates from './templates';
import call from './call';

let root = null;
let useHash = true;
let router = new Navigo(root, useHash);

router
  .on({
    'article/i/:id': params => call.getOneById(params.id).then(templates.showArticle),
    'article/:smug': params => call.getOneBySmug(params.smug).then(templates.showArticle),
    'article/create/new': () => templates.articleCreate(),
    'article/:id/edit': params => call.getOneById(params.id).then((r) => { r.content = _.unescape(r.content); return r }).then(templates.articleEdit),
    'page/:number': params => call.getPage(params.number).then(templates.showStartPage),
    '*': () => call.getPage(1).then(templates.showStartPage)
  })
  .resolve();
