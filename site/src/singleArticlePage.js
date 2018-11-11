import QQ from '../lib/js/myQuery';
import call from '../lib/js/call';
import Comment from './comment';
import templates from '../lib/js/templates';
import sanitizer from '../lib/js/sanitizer';

let _article;

function setActionsIfOnline() {
  call.incrementViews(_article._id);

  QQ.set.byId.click('newCommentPost', () => {
    let commentValue = QQ.get.byId.value('newCommentText');
    let by = QQ.get.byId.value('newCommentPoster');

    if (!commentValue || !by) return;

    let comment = new Comment(by, commentValue);

    call.addComment(_article._id, comment);
    _article.comments.push(sanitizer.sanitiseComment(comment));
    templates.showArticle(_article);
  });
}

function setActionsIfOffline() {

}

export default {
  init: (article) => {
    _article = article;
    QQ.set.byId.innerHtml('articleContent', article.content);

    if (navigator.onLine) setActionsIfOnline();
    else setActionsIfOffline();
  }
}