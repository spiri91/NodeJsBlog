import myQ from './lib/js/myQuery.js';
import './lib/css/main.css';
import constants from './lib/js/constants';
import router from './lib/js/router'; 
import templateEngine from './lib/js/templates';
import $ from 'jquery';

var article = {
    title : 'Le title',
    content : 'random content',
    description : 'random description'
}

var init = function(){
    templateEngine.showArticle(article)
}

$(document).ready(init);

