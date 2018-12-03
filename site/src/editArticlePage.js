import $ from 'jquery';
import QQ from '../lib/js/myQuery';
import call from '../lib/js/call';
import '../lib/css/jquery-te-1.4.0.css';
import jte from '../dist/js/jquery-te-1.4.0.min';

let etArticle;

function submit() {
  let token = QQ.get.byId.value('token');

  etArticle.title = QQ.get.byId.value('title');
  etArticle.description = QQ.get.byId.value('description');
  etArticle.content = QQ.get.byId.value('content');
  etArticle.visible = QQ.get.byId.checkedState('isVisible');
  etArticle.smug = etArticle.title.replace(' ', '-');
  etArticle.css = QQ.get.byId.value('cssInputContainer');

  return call.put(etArticle._id, etArticle, token)
    .then(() => QQ.alert.success('edited'))
    .catch((e) => { console.log(e); QQ.alert.error(e.message); });
}

function preview() {
  let previewWindow = window.open();
  let css = QQ.get.byId.value('cssInputContainer');
  let content = QQ.get.byId.value('content');

  let html = `<style>${css}</style><div>${content}</div>`

  previewWindow.document.body.innerHTML = html;
}

function upload() {
  let uploader = document.getElementById("imageUploader");
  if (uploader.files.length === 0) return;

  let image = uploader.files[0];

  let reader = new FileReader();

  reader.addEventListener('load', () => {
    etArticle.image = reader.result;
    let img = document.getElementById('imagePreview');
    img.src = reader.result;
  }, false)

  if (image) reader.readAsDataURL(image);
}

let init = (article) => {
  delete article.comments;

  etArticle = article;

  jte.jteF($);
  $('#content').jqte();

  QQ.set.byClass.innerHtml('jqte_editor', article.content);
  QQ.set.byId.innerHtml('cssInputContainer', article.css);
  QQ.set.byId.click('submit', submit)
  QQ.set.byId.click('show', preview);
  QQ.set.byId.change('imageUploader', upload);
}

export default {
  init
}