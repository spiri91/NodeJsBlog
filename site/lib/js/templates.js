import Mustache from 'mustache';
import * as consts from './constants';
import articlePage from '../../src/singleArticlePage';
import homePage from '../../src/homePage';
import editArticle from '../../src/editArticlePage';
import createArticle from '../../src/createArticlePage'
import QQ from './myQuery';

let homeTemplate = `
<div class='mainPageArticles'>
  {{#.}}
    <div class='mainPageArticle' data-target-smug='{{smug}}'>
      <h5>{{title}}</h5>
      <span>{{description}}</span><br>
      <br>
    <div>
  {{/.}}
</div>
`

let articleTemplate = `<h3>{{title}}<h3>
  <span>{{description}}</span></br><br>
  <div class='articleContent' id='articleContent'></div><br>
  <input type='text' placeholder='comment' id='newCommentText'/><br>
  <input type='text' placeholder='name' id='newCommentPoster'/> <br>
  <input type='button' value='Post' id='newCommentPost' /><br> 
  <br>
  <span>END</span>
  <h3>Comments<h3>
  <ul>
    {{#comments}}
      <li>{{by}}: {{content}}  || {{date}}}</li>
    {{/comments}}
  </ul>
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