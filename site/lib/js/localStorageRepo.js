export default {
  get: async (key) => {
    let obj = localStorage.getItem(key);
    return JSON.parse(obj);
  },

  getAll: async () => {
    let archive = [];
    let keys = Object.keys(localStorage);
    let i = 0;
    let key;

    for (; key = keys[i]; i++) {
      archive.push(JSON.parse(localStorage.getItem(key)));
    }

    return archive;
  },

  set: async (key, value) => {
    if(window.cookiesAccepted === false) 
      return;

    let obj = JSON.stringify(value);

    localStorage.setItem(key, obj);
  }
}