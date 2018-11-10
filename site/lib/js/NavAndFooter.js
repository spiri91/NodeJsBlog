import { nav } from '../templates/nav';
import { footer } from '../templates/footer';
import QQ from './myQuery';
import call from './call';
import templates from './templates';
import sanitizer from './sanitizer';

function addNavBarEvents() {
  QQ.set.byId.click("SearchButton", (event) => {
    event.preventDefault();
    let titlePart = QQ.get.byId.value('SearchInput');
    call.search(titlePart).then((res) => {
      templates.showStartPageAfterSearch(sanitizer.sanitiseArticles(res));
    })
  });
}

function buildNav() {
  QQ.set.byId.innerHtml('Nav', nav);
  addNavBarEvents();
}

function buildFooter() {
  QQ.set.byId.innerHtml('Footer', footer);
}

function buildBoth() {
  buildNav();
  buildFooter();
}

export default {
  buildNav,
  buildFooter,
  buildBoth
}