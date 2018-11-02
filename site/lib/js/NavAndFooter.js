import { nav } from '../templates/nav';
import { footer } from '../templates/footer';
import QQ from './myQuery';


function buildNav() {
  QQ.set.byId.innerHtml('Nav', nav);
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