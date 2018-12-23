import _ from 'underscore';
import call from '../lib/js/call';
import QQ from '../lib/js/myQuery';
import templates from '../lib/js/templates';
import builder from '../lib/js/navAndFooter';
import router from '../lib/js/router';

async function getPaginationArray() {
  let res = await call.getCount();
  let pages = (res.count / 10) + 1;
  let pagesArray = _.range(1, pages);

  templates.setPagination(pagesArray);
}

function getPageFromUrl() {
  let page = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  if (!page) return 1;

  return page;
}

function addGotoEvents() {
  let elms = QQ.get.byAttribute.all('go-to');
  for (let e of elms) {
    let smug = e.getAttribute('go-to');
    e.addEventListener('click', () => router.navigateToArticleBySmug(smug));
  }
}

function setActivePage() {
  let pageNr = getPageFromUrl();
  let element = QQ.get.byAttribute.element("data-page-link", pageNr);
  if (element.length === 0) return;

  element[0].classList.add('active');
}

export default {
  init: async (showPagination) => {
    if (true === showPagination && true === navigator.onLine) {
      await getPaginationArray();
      setActivePage();
    }

    builder.buildBoth();

    addGotoEvents();
  }
}