import Navigo from 'navigo';
import templates from './templates';
import call from './call';
import sanitizer from './sanitizer';

let root = null;
let useHash = true;
let router = new Navigo(root, useHash);

router.hooks({
  before: (done) => {
    templates.hideMainContent();
    templates.showSpinner();
    done();
  }
})

router.on({
  'article/i/:id': params => call.getOneById(params.id)
    .then(sanitizer.sanitiseArticle)
    .then(templates.showArticle)
    .then(templates.hideSpinner),
  'article/:smug': params => call.getOneBySmug(params.smug)
    .then(sanitizer.sanitiseArticle)
    .then(templates.showArticle)
    .then(templates.hideSpinner),
  'article/create/new': () => { templates.articleCreate(); templates.hideSpinner(); },
  'article/:id/edit': params => call.getOneById(params.id)
    .then(sanitizer.sanitiseArticle)
    .then(templates.articleEdit)
    .then(templates.hideSpinner),
  'page/:number': params => call.getPage(params.number)
    .then(sanitizer.sanitiseArticles)
    .then(templates.showStartPage)
    .then(templates.hideSpinner),
  'search/:searchBy': params => call.search(params.searchBy)
    .then(sanitizer.sanitiseArticles)
    .then(templates.showStartPageAfterSearch)
    .then(templates.hideSpinner),
  'about': () => { templates.showAboutPage(); templates.hideSpinner(); },
  'ads': () => templates.showAds(),
  '*': () => call.getPage(1).then(sanitizer.sanitiseArticles)
    .then(templates.showStartPage)
    .then(templates.hideSpinner)
}).resolve();

export default {
  navigateToArticleBySmug: (smug) => {
    router.navigate(`/article/${smug}`);
  },
  navigateToPageNumber: (pageNumber) => {
    router.navigate(`/page/${pageNumber}`);
  },
  navigateWitheSearch: (query) => {
    router.navigate(`/search/${query}`);
  },
  navigateToArticleForEdit: (id) => {
    router.navigate(`/article/${id}/edit`);
  }
}