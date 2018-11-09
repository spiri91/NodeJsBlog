import Mustache from 'mustache';
import * as consts from './constants';
import articlePage from '../../src/singleArticlePage';
import homePage from '../../src/homePage';
import editArticle from '../../src/editArticlePage';
import createArticle from '../../src/createArticlePage'
import QQ from './myQuery';

import homeTemplate from '../templates/homeTemplate';
import editTemplate from '../templates/editArticleTemplate';
import showTemplate from '../templates/showArticleTemplate';
import { pagination } from '../templates/pagination';

function set(value) {
  QQ.set.byId.innerHtml(consts.mainContent, value);
}

function setById(value, id) {
  QQ.set.byId.innerHtml(id, value);
}

export default {
  showArticle: (article) => {
    let output = Mustache.render(showTemplate.show, article);
    set(output);

    articlePage.init(article);
  },

  showStartPage: (obj) => {
    let output = Mustache.render(homeTemplate.home, obj);
    set(output);
    homePage.init(true);
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
  }
};