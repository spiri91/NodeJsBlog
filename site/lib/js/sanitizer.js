import _ from 'underscore';
import moment from 'moment';

let generalDateFormat = 'DD/MM/YYYY hh:mm';

export default {
  sanitiseArticle: (article) => {
    article.content = _.unescape(article.content);

    for (let c of article.comments) {
      c.date = moment(c.date).format(generalDateFormat);
    }

    return article;
  },
  sanitiseArticles: (articles) => {
    for (let a of articles) a.date = moment(a.date).format(generalDateFormat);

    return articles;
  },
  sanitiseComment: (comment) => {
    comment.date = moment(comment.date).format(generalDateFormat);
    
    return comment;
  }
}