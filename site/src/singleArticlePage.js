import QQ from '../lib/js/myQuery';
import call from '../lib/js/call';
import Comment from './comment';

let _article;

export default {
 

  init: (article) => {
    _article = article;

    QQ.set.byId.click('newCommentPost', async () => {
      let commentValue = QQ.get.byId.value('newCommentText');

      if (!commentValue) return;

      let comment = new Comment('me', commentValue);

      await call.addComment(_article._id, comment);

      alert('added');
    });
  }
}