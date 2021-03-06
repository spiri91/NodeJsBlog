import Mustache from 'mustache';
import * as consts from './constants';
import articlePage from '../../src/singleArticlePage';
import homePage from '../../src/homePage';
import editArticle from '../../src/editArticlePage';
import createArticle from '../../src/createArticlePage'
import newNotificationJs from '../../src/newNotification'
import QQ from './myQuery';
import adsJs from '../../src/ads';

import homeTemplate from '../templates/homeTemplate';
import editTemplate from '../templates/editArticleTemplate';
import showTemplate from '../templates/showArticleTemplate';
import { pagination } from '../templates/pagination';
import { previewTemplate } from '../templates/previewTemplate';
import { about } from '../templates/aboutPage';
import { ads } from '../templates/ads';
import { newNotification } from '../templates/newNotification';

function set(value) {
  QQ.set.byId.innerHtml(consts.mainContent, value);
}

function setById(value, id) {
  QQ.set.byId.innerHtml(id, value);
}

export default {
  showArticle: (article) => {
    article.commentsCount = article.comments.length;

    let output = Mustache.render(showTemplate.show, article);
    set(output);

    articlePage.init(article);
  },

  showStartPage: (obj) => {
    let output = Mustache.render(homeTemplate.home, obj);
    set(output);

    homePage.init(true);
  },

  showStartPageAfterSearch: (obj) => {
    let output = Mustache.render(homeTemplate.home, obj);
    set(output);

    if (obj.length === 0) QQ.alert.warning(':-( Nu am gasit nimic.');

    homePage.init(false);
  },

  articleCreate: () => {
    let output = Mustache.render(editTemplate.edit, {});
    set(output);

    createArticle.init();
  },

  articleEdit: (obj) => {
    let output = Mustache.render(editTemplate.edit, obj);
    set(output);

    editArticle.init(obj);
  },

  setPagination: (paginationArray) => {
    let output = Mustache.render(pagination, paginationArray);

    setById(output, "Pagination");
  },

  previewArticle: (article) => {
    let output = Mustache.render(previewTemplate, article);

    let previewWindow = window.open();

    previewWindow.document.open();
    previewWindow.document.write(output);
    previewWindow.document.close();
  },

  showAboutPage: () => {
    set(about);
    adsJs.init();
  },

  showAds: () => {
    set(ads);
  },

  showSpinner: () => {
    QQ.get.byClass.show('spinner-js')
  },

  hideMainContent: () => {
    set('');
  },

  hideSpinner: () => {
    QQ.get.byClass.hide('spinner-js');
  },

  showNewNotification: () => {
    set(newNotification);

    newNotificationJs.init();
  }
};