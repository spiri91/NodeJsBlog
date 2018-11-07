export default {
  get: (key) => {
    debugger;
    let obj = localStorage.getItem(key);
    return JSON.parse(obj);
  },

  getAll: () => {
    let archive = [];
    let keys = Object.keys(localStorage);
    let i = 0;
    let key;

    for (; key = keys[i]; i++) {
      archive.push(localStorage.getItem(key));
    }

    return archive;
  },

  set: (key, value) => {
    debugger;
    let obj = JSON.stringify(value);

    localStorage.setItem(key, obj);
  }
}