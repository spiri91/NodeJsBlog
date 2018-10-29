import QQ from '../lib/js/myQuery';
import router from '../lib/js/router';

export default {
    init : () => {
        QQ.set.byClass.click('mainPageArticle', (e) => {
            e.preventDefault();
            let smug = e.srcElement.getAttribute('data-target-smug');
            window.location.pathname = `#/${{smug}}`;
        });
    }
}