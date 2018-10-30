import QQ from '../lib/js/myQuery';
import router from '../lib/js/router';

export default {
    init : () => {
        QQ.set.byClass.click('mainPageArticle', (e) => {
            e.preventDefault();
            e.stopPropagation();

            let smug = e.srcElement.getAttribute('data-target-smug') || e.srcElement.parentElement.getAttribute('data-target-smug');
            router.navigateToArticleBySmug(smug);
        });
    }
}