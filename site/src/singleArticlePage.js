import QQ from '../lib/js/myQuery';
import call from '../lib/js/call';
import Comment from './comment';

let _article;

export default {
 

  init: (article) => {
    _article = article;
    QQ.set.byId.innerHtml('articleContent', article.content);

    QQ.set.byId.click('newCommentPost', async () => {
      let commentValue = QQ.get.byId.value('newCommentText');
      let by = QQ.get.byId.value('newCommentPoster');

      if (!commentValue || !by) return;

      let comment = new Comment(by, commentValue);

      await call.addComment(_article._id, comment);

      alert('added');
    });
  }
}