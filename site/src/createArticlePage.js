import QQ from '../lib/js/myQuery';
import Article from './article';
import call from '../lib/js/call';

function submit() {
  let token = QQ.get.byId.value('token');

  let article = new Article(
    QQ.get.byId.value('title'),
    QQ.get.byId.value('description'),
    QQ.get.byId.value('content'),
    QQ.get.byId.checkedState('isVisible')
  );

  return call.post(article, token)
    .then(() => alert('created'))
    .catch((e) => { console.log(e); alert('check console'); });
}

let init = () => QQ.set.byId.click('submit', submit)

export default {
  init
}