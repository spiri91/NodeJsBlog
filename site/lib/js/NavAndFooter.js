import $ from 'jquery';
import { nav } from '../templates/nav';
import { footer } from '../templates/footer';
import QQ from './myQuery';
import router from './router';

function addNavBarEvents() {
  QQ.set.byId.keypress('SearchInput', (e) => {
    if (e.which === 13 || e.keyCode === 13) {
      event.preventDefault();
      let titlePart = QQ.get.byId.value('SearchInput');
      router.navigateWitheSearch(titlePart);
    }
  });
}

function getSharingLinksScript() {
  let script = document.createElement('script');
  script.src = 'https://static.addtoany.com/menu/page.js';
  document.body.appendChild(script);
}

function buildNav() {
  QQ.set.byId.innerHtml('Nav', nav);
  addNavBarEvents();
  getSharingLinksScript();
}

function buildFooter() {
  QQ.set.byId.innerHtml('Footer', footer);
}

function footerWasShownInThisSession() {
  let footeWasShown = sessionStorage.getItem('footerWasShown');

  return footeWasShown === 'true';
}

function footerWasShown() {
  if (!window.cookiesAccepted || window.cookiesAccepted === false) return;

  sessionStorage.setItem('footerWasShown', 'true');
}

function hideElementsIfUserIsOffline() {
  if (false === navigator.onLine) {
    QQ.get.byId.hide('SearchInput');
    QQ.get.byClass.hide('shareLinksDropDown');
  }
}

function buildBoth() {
  buildNav();

  if (footerWasShownInThisSession() === false) {
    buildFooter();
    footerWasShown();
  }

  hideElementsIfUserIsOffline();
}

export default {
  buildNav,
  buildFooter,
  buildBoth
}