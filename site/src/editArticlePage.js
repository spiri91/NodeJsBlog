import $ from 'jquery';
import QQ from '../lib/js/myQuery';
import call from '../lib/js/call';
import '../lib/css/jquery-te-1.4.0.css';
import jte from '../dist/js/jquery-te-1.4.0.min.js';


let etArticle;

function submit() {
  let token = QQ.get.byId.value('token');

  etArticle.title = QQ.get.byId.value('title');
  etArticle.description = QQ.get.byId.value('description');
  etArticle.content = QQ.get.byId.value('content');
  etArticle.visible = QQ.get.byId.checkedState('isVisible');
  etArticle.smug = etArticle.title.replace(' ','-');

  return call.put(etArticle._id, etArticle, token)
    .then(() => alert('edited'))
    .catch((e) => { console.log(e); alert('check console'); });
}

let init = (article) => {
  delete article.comments;

  jte.jteF($);
  $('#content').jqte();

  QQ.set.byClass.innerHtml('jqte_editor', article.content);
  etArticle = article;
  QQ.set.byId.click('submit', submit)
}

export default {
  init
}