export default {
  get: {
    byId: {
      value: id => document.getElementById(id).value,
      innerHtml: id => document.getElementById(id).innerHTML,
    },
  },
  set: {
    byId: {
      innerHtml: (id, content) => {
        document.getElementById(id).innerHTML = content;
      },
      click: (id, event) => {
        document.getElementById(id).addEventListener('click', event);
      }
    },
    byClass: {
      click: (className, event) => {
        let elements = document.getElementsByClassName(className);
        for(let e of elements) e.addEventListener('click', event);
      }
    }
  }
}