import Mustache from 'mustache';
import * as consts from './constants';
import articlePage from '../../src/singleArticlePage';
import homePage from '../../src/homePage';
import editArticle from '../../src/editArticlePage';
import createArticle from '../../src/createArticlePage'
import QQ from './myQuery';

let homeTemplate = "<h1>{{title}}</h1><br><br></br>"
  + "<span>{{description}}</span><br><br>";

let articleTemplate = `<h3>{{title}}<h3>
  <span>{{description}}</span></br><br>
  <div class='articleContent'>{{content}}</div><br>
  <input type='text' placeholder='comment' id='newCommentText'/><br>
  <input type='button' value='Post' id='newCommentPost' /><br> 
  <br>
  <span>END</span>
  `;

let articleEditTemplate = `
<div class="editArticle">
<input type="text" placeholder="token" id="token"><br><br>
<input type="text" placeholder="title" value="{{title}}" id="title"><br><br>
<input type="text" placeholder="description" value="{{description}}" id="description"><br><br>
<textarea class="content" id="content">{{content}}</textarea><br><br>
<button id="submit"> Submit </button><br><br>
<span>END</span>
</div>
`

function set(value) {
  QQ.set.byId.innerHtml(consts.mainContent, value);
}

export default {
  showArticle: (article) => {
    let output = Mustache.render(articleTemplate, article);
    set(output);

    articlePage.init(article);
  },

  showStartPage: (obj) => {
    let output = Mustache.render(homeTemplate, obj);
    set(output);

    homePage.init();
  },

  articleCreate: () => {
    let output = Mustache.render(articleEditTemplate, {});
    set(output);

    createArticle.init();
  },

  articleEdit: (obj) => {
    let output = Mustache.render(articleEditTemplate, obj);
    set(output);

    editArticle.init(obj);
  }
};