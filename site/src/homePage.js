import $ from 'jquery'
import call from '../lib/js/call';
import QQ from '../lib/js/myQuery';
import builder from '../lib/js/navAndFooter';
import router from '../lib/js/router';

async function getPaginationArray() {
  let res = await call.getCount();
  let pages = (res.count / 10) + 1;

  return Math.floor(pages);
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

function showSharingLinks(e) {
  e.stopPropagation();
  e.preventDefault();
  if ($('.navbar-toggler').length > 0)
    $('.navbar-toggler').click();

  $('.shareLinksDropDown').click();
}

function disableNavigationBtnsBasedOnPage(numberOfPages, currentPageNumber) {
  if (currentPageNumber === 1) QQ.get.byClass.withCallBack('next-page', (b) => { b.style.display = 'none' })
  if (currentPageNumber === numberOfPages) QQ.get.byClass.withCallBack('previous-page', (b) => { b.style.display = 'none' })
}

function addBtnForNavigationAndSharing(numberOfPages) {
  let currentPage = getPageFromUrl();

  QQ.set.byClass.click('next-page', () => router.navigateToPageNumber(currentPage + 1));
  QQ.set.byClass.click('previous-page', () => router.navigateToPageNumber(currentPage - 1));
  QQ.set.byClass.click('share', showSharingLinks);

  disableNavigationBtnsBasedOnPage(numberOfPages, currentPage);
}

export default {
  init: async (showPagination) => {
    if (true === showPagination && true === navigator.onLine) {
      let pages = await getPaginationArray();
      addBtnForNavigationAndSharing(pages);
    }

    builder.buildBoth();

    addGotoEvents();
  }
}