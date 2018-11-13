import $ from 'jquery';
import QQ from '../lib/js/myQuery';
import Article from './article';
import call from '../lib/js/call';
import '../lib/css/jquery-te-1.4.0.css';
import jte from '../dist/js/jquery-te-1.4.0.min.js';


function submit() {
  let token = QQ.get.byId.value('token');

  let article = new Article(
    QQ.get.byId.value('title'),
    QQ.get.byId.value('description'),
    QQ.get.byClass.innerHtml('jqte_editor'),
    QQ.get.byId.checkedState('isVisible')
  );

  return call.post(article, token)
    .then(() => alert('created'))
    .catch((e) => { console.log(e); alert('check console'); });
}

let init = () => {
  jte.jteF($);

  $('#content').jqte();
  QQ.set.byId.click('submit', submit);
}

export default {
  init
}