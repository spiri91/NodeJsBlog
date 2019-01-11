import QQ from '../lib/js/myQuery';

function toogleActiveClass() {
    document.querySelectorAll('.action-btn-container .container')[0].classList.toggle('containerIsActive');
}

function init() {
    QQ.set.byClass.click('main-action-btn', toogleActiveClass);
}

export default function() {
    init();
}