import QQ from '../lib/js/myQuery';
import call from '../lib/js/call';

let etArticle;

function submit() {
  let token = QQ.get.byId.value('token');

  etArticle.title = QQ.get.byId.value('title');
  etArticle.description = QQ.get.byId.value('description');
  etArticle.content = QQ.get.byId.value('content');
  etArticle.visible = QQ.get.byId.checkedState('isVisible');

  return call.put(etArticle._id, etArticle, token)
    .then(() => alert('edited'))
    .catch((e) => { console.log(e); alert('check console'); });
}

let init = (article) => {
  delete article.comments;

  etArticle = article;
  QQ.set.byId.click('submit', submit)
}

export default {
  init
}