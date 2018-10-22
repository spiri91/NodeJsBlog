import * as consts from './constants';

let mainTemplate = "<h1>{{title}}</h1><br><br></br>"
  + "<span>{{description}}</span><br><br>";

let articleTemplate = '<h3>{{title}}<h3>'
  + '<span>{{description}}<span></br>'
  + '<span>{{content}}';

let articleDTOTemplate = '<h3>{{title}}<h3>'
  + '<span>{{description}}<span>';

let body = null;

function getBody() {
  if (!body) body = document.getElementById(consts.mainContent);
}

function set(value) {
  getBody();

  body.innerHTML = value;
}

function buildCompoment(str, obj) {
  let val = str;
  for (let i in obj) val = val.replace('{{' + i + '}}', obj[i]);

  return val;
}

export default {

  showArticle: (article) => {
    let articleStr = articleTemplate;

    articleStr = buildCompoment(articleStr, article);

    set(articleStr);
  },

  showStartPage: (obj) => {
    let mainStr = mainTemplate;

    mainStr = buildCompoment(mainStr, obj);

    set(mainStr);
  },

  createArticle: () => {

  }
};