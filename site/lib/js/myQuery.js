import AWN from "awesome-notifications"

let notifier = new AWN()

export default {
  get: {
    byId: {
      value: id => document.getElementById(id).value,
      innerHtml: id => document.getElementById(id).innerHTML,
      checkedState: id => document.getElementById(id).checked
    },
    byAttribute: {
      element: (attributeName, value) => document.querySelectorAll(`[${attributeName}="${value}"]`)
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
      }
    },
    byClass: {
      click: (className, event) => {
        let elements = document.getElementsByClassName(className);
        for (let e of elements) e.addEventListener('click', event);
      },
      innerHtml: (className, value) => {
        document.getElementsByClassName(className)[0].innerHTML = value;
      }
    }
  },

  alert: {
    success: msg => notifier.success(msg),
    warning: msg => notifier.warning(msg),
    error: msg => notifier.alert(msg)
  }
}