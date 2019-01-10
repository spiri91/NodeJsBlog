import QQ from '../lib/js/myQuery';

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

function showModal() {
  QQ.get.byClass.withCallBack('show-cookies-modal-js', b => b.click());
}

function userAcceptedCookies() {
  window.cookiesAccepted = true;
  
  setCookie('bzCookies', 'true', 365);
}

function userDidntAcceptedCookies() {
  window.cookiesAccepted = false;
}

function acceptCookies() {
  if (getCookie('bzCookies') === 'true') {
    window.cookiesAccepted = true;

    return;
  }

  showModal();

  QQ.set.byClass.click('acceptCookies-js', userAcceptedCookies);
  QQ.set.byClass.click('noAcceptCookies-js', userDidntAcceptedCookies);
}

export {
  acceptCookies
}