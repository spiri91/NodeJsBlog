import QQ from '../lib/js/myQuery';
import call from '../lib/js/call';
import Comment from './comment';
import templates from '../lib/js/templates';
import sanitizer from '../lib/js/sanitizer';

let _article;

let commentsAreShown = false;
let addCommentIsShown = false;

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
  QQ.get.byClass.hide('newComment');
}

function removeBodyMist() {
  document.body.classList.remove('mist');
}

function addBodyMist() {
  document.body.classList.add('mist');
}

function showOrHideComments() {
  if (commentsAreShown) {
    removeBodyMist();
    QQ.get.byClass.hide('commentsSection');
    QQ.get.byClass.hide('newComment');
  } else {
    addBodyMist();
    QQ.get.byClass.hide('newComment');
    QQ.get.byClass.show('commentsSection');
  }

  addCommentIsShown = false;
  commentsAreShown = !commentsAreShown;
}

function showOrHideNewComment() {
  if (addCommentIsShown) {
    removeBodyMist();
    QQ.get.byClass.hide('commentsSection');
    QQ.get.byClass.hide('newComment');
  } else {
    addBodyMist();
    QQ.get.byClass.hide('commentsSection');
    QQ.get.byClass.show('newComment');
  }

  commentsAreShown = false;
  addCommentIsShown = !addCommentIsShown;
}

function closeModals() {
  removeBodyMist();

  QQ.get.byClass.hide('commentsSection');
  QQ.get.byClass.hide('newComment');

  commentsAreShown = false;
  addCommentIsShown = false;
}

function addEventsForShowCreateComments() {
  QQ.set.byClass.click('show-comments-js', showOrHideComments);
  QQ.set.byClass.click('add-comment-js', showOrHideNewComment);
  QQ.set.byClass.click('close-modals-js', closeModals);
}

function eventsForCreateAndShowComments() {
  QQ.get.byClass.hide('commentsSection');
  QQ.get.byClass.hide('newComment')

  addEventsForShowCreateComments();
}


export default {
  init: (article) => {
    _article = article;
    let script = QQ.get.byId.innerHtml('leScript');
    eval(script);

    if (navigator.onLine) setActionsIfOnline();
    else setActionsIfOffline();

    eventsForCreateAndShowComments();
  }
}