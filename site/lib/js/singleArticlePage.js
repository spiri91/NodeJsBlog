import QQ from './myQuery';
import call from './call';

let _article;

export default {
 

  init: (article) => {
    _article = article;

    QQ.set.byId.click('newCommentPost', async () => {
      let comment = QQ.get.byId.value('newCommentText');

      if (!comment) return;

      await call.addComment(_article._id, comment);

      alert('added');
    });
  }
}