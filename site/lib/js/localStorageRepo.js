function get(key) {
  let obj = localStorage.getItem(key);
  return JSON.parse(obj);
}

function getAll() {
  let archive = [];
  let keys = Object.keys(localStorage);
  let i = 0;
  let key;

  for (; key = keys[i]; i++) {
    archive.push(JSON.parse(localStorage.getItem(key)));
  }

  return archive;
}

function set(key, value) {
  if (window.cookiesAccepted === false) 
    return;

  let obj = JSON.stringify(value);

  localStorage.setItem(key, obj);
}

function setAll(articles) {
  for (let article of articles)
    set(article.smug, article);
}

export default {
  get,
  getAll,
  set,
  setAll
}