import * as consts from './constants';

var mainTemplate = '<h1>{{title}}</h1>' +
    '<div>{{body}}</div>';

var articleTemplate = '<h3>{{title}}<h3>' +
'<span>{{description}}<span></br>' +
'<span>{{content}}';

var articleDTOTemplate = '<h3>{{title}}<h3>' +
'<span>{{description}}<span>';

var body = null;

function getBody(){
    if(!body) body = document.getElementById(consts.bodyId);
}

function set(value){
    body.innerHTML = value;
}

export default {
    showArticle: (article) => {
        getBody();
        var articleStr = articleTemplate;
        for(let i in article) articleStr = articleStr.replace('{{'+i+'}}', article[i]);
        
        set(articleStr);
    },

    showArticles: (articles) => {

    },

    createArticle: () => {

    }
};