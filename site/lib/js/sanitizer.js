import _ from 'underscore';
import moment from 'moment';

export default {
    sanitiseArticle: article => {
        article.content = _.unescape(article.content);

        for(let c of article.comments){
            c.date = moment(c.date).format('DD/MM/YYYY hh:mm');
        }

        return article;
    }
}