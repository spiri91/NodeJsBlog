import Navigo from 'navigo';
import _ from 'underscore';
import templates from './templates';
import call from './call';
import sanitizer from './sanitizer';

let root = null;
let useHash = true;
let router = new Navigo(root, useHash);

router
  .on({
    'article/i/:id': params => call.getOneById(params.id).then(sanitizer.sanitiseArticle).then(templates.showArticle),
    'article/:smug': params => call.getOneBySmug(params.smug).then(sanitizer.sanitiseArticle).then(templates.showArticle),
    'article/create/new': () => templates.articleCreate(),
    'article/:id/edit': params => call.getOneById(params.id).then(sanitizer.sanitiseArticle).then(templates.articleEdit),
    'page/:number': params => call.getPage(params.number).then(templates.showStartPage),
    '*': () => call.getPage(1).then(sanitizer.sanitiseArticles).then(templates.showStartPage)
  })
  .resolve();

export default {
  navigateToArticleBySmug: (smug) => {
    router.navigate(`/article/${smug}`);
  },
  navigateToPageNumber: (pageNumber) => {
    router.navigate(`/page/${pageNumber}`);
  }
}
