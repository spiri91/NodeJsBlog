import AWN from "awesome-notifications"

let notifier = new AWN()

export default {
  get: {
    byId: {
      value: id => document.getElementById(id).value,
      innerHtml: id => document.getElementById(id).innerHTML,
      checkedState: id => document.getElementById(id).checked,
      hide: (id) => {
        let element = document.getElementById(id);
        element.style.display = 'none';
      },
    },
    byAttribute: {
      element: (attributeName, value) => document.querySelectorAll(`[${attributeName}="${value}"]`),
      all: attributeName => document.querySelectorAll(`[${attributeName}]`)
    },
    byClass: {
      innerHtml: className => document.getElementsByClassName(className)[0].innerHTML,
      withCallBack: (className, callBack) => {
        let element = document.getElementsByClassName(className)[0];
        callBack(element);
      },
      hide: (className) => {
        let element = document.getElementsByClassName(className)[0];
        element.style.display = 'none';
      },
      show: (className) => {
        let element = document.getElementsByClassName(className)[0];
        element.style.display = 'block';
      }
    }
  },
  set: {
    byId: {
      innerHtml: (id, content) => {
        document.getElementById(id).innerHTML = content;
      },
      click: (id, event) => {
        document.getElementById(id).addEventListener('click', event);
      },
      change: (id, event) => {
        document.getElementById(id).addEventListener('change', event);
      },
      checked: (id, checkedState) => {
        document.getElementById(id).checked = checkedState;
      },
      keypress: (id, event) => document.getElementById(id).addEventListener('keypress', event)
    },
    byClass: {
      click: (className, event) => {
        let elements = document.getElementsByClassName(className);
        for (let e of elements) e.addEventListener('click', event);
      },
      innerHtml: (className, value) => {
        document.getElementsByClassName(className)[0].innerHTML = value;
      },
      input: (className, event) => {
        document.getElementsByClassName(className)[0].addEventListener('input', event);
      }
    }
  },

  alert: {
    success: msg => notifier.success(msg),
    warning: msg => notifier.warning(msg),
    error: msg => notifier.alert(msg)
  }
}