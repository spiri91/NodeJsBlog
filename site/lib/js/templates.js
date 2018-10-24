import * as consts from './constants';
import Mustache from 'mustache';
import articlePage from  '../../src/singleArticlePage';
import homePage from '../../src/homePage';
import editArticle from '../../src/editArticlePage';
import QQ from './myQuery';

let homeTemplate = "<h1>{{title}}</h1><br><br></br>"
  + "<span>{{description}}</span><br><br>";

let articleTemplate = '<h3>{{title}}<h3>'
  + '<span>{{description}}<span></br>'
  + '<span>{{content}}';

let articleEditTemplate = `
<div class="editArticle">
<input type="text" placeholder="token"><br><br>
<input type="text" placeholder="title" value="{{title}}"><br><br>
<input type="text" placeholder="description" value="{{description}}"><br><br>
<div class="content" contenteditable="true">
    {{content}}
</div>
<br>
<span>END</span>
</div>
`

function set(value) {
  QQ.set.byId.innerHtml(consts.mainContent, value);

  body.innerHTML = value;
}

function buildCompoment(str, obj) {
  let val = str;
  for (let i in obj) val = val.replace('{{' + i + '}}', obj[i]);

  return val;
}

export default {
  showArticle: (article) => {
    let output = Mustache.render(articleTemplate, article);
    set(output);

    articlePage.init();
  },

  showStartPage: (obj) => {
   buildCompoment(mainStr, obj);
    let output = Mustache.render(homeTemplate, obj);
    set(output);

    homePage.init();
  },

  articleEdit: (obj) => {
    let output = Mustache.render(articleEditTemplate, obj);
    set(output);

    editArticle.init();
  },
};