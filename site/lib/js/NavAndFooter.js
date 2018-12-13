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