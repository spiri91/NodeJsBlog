import QQ from '../lib/js/myQuery';
import Article from './article';
import call from '../lib/js/call';

let init = () => QQ.set.byId.click('submit', submit)

function submit(){
    let token = QQ.get.byId.value('token');

    let article = new Article(
        QQ.get.byId.value('title'),
        QQ.get.byId.value('description'),
        QQ.get.byId.innerHtml('content')
    );

    return call.post(article, token)
        .then(() => alert('created'))
        .catch(e => {console.log(e); alert('check console'); });
}

export default {
    init
}