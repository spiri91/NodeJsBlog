import QQ from '../lib/js/myQuery';
import router from '../lib/js/router';

function getCurrentPageFromUrl(){
    let page = window.location.href.substr(window.location.href.lastIndexOf("/") + 1) || 1;

    return Number(page);
};

export default {
    init : () => {
        QQ.set.byClass.click('mainPageArticle', (e) => {
            e.preventDefault();
            e.stopPropagation();

            let smug = e.srcElement.getAttribute('data-target-smug') || e.srcElement.parentElement.getAttribute('data-target-smug');
            router.navigateToArticleBySmug(smug);
        });

        QQ.set.byId.click('moveNext', () => {
            
            router.navigateToPageNumber(getCurrentPageFromUrl() + 1);
        });

        QQ.set.byId.click('movePrevious', () => {
            getCurrentPageFromUrl();
            router.navigateToPageNumber(getCurrentPageFromUrl() - 1);
        });
    }
}