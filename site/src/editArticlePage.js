import QQ from '../lib/js/myQuery';
import Article from './article';
import call from '../lib/js/call';

let etArticle;

let init = (article) => {
    etArticle = article;
    QQ.set.byId.click('submit', submit)
}

function submit() {
    let token = QQ.get.byId.value('token');

    etArticle.title = QQ.get.byId.value('title');
    etArticle.description = QQ.get.byId.value('description');
    etArticle.content = QQ.get.byId.innerHtml('content');

    return call.put(etArticle._id, etArticle, token)
        .then(() => alert('edited'))
        .catch(e => { console.log(e); alert('check console'); });
}

export default {
    init
}