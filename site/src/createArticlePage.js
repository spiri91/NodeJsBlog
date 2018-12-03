import $ from 'jquery';
import QQ from '../lib/js/myQuery';
import Article from './article';
import call from '../lib/js/call';
import '../lib/css/jquery-te-1.4.0.css';
import jte from '../dist/js/jquery-te-1.4.0.min';

let theImage = null;

function submit() {
  let token = QQ.get.byId.value('token');

  let article = new Article(
    QQ.get.byId.value('title'),
    QQ.get.byId.value('description'),
    QQ.get.byClass.innerHtml('jqte_editor'),
    QQ.get.byId.checkedState('isVisible'),
    QQ.get.byId.value('cssInputContainer'),
    theImage
  );

  return call.post(article, token)
    .then(() => QQ.alert.success('created'))
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
    theImage = reader.result;
    let img = document.getElementById('imagePreview');
    img.src = reader.result;
  }, false)

  if (image) reader.readAsDataURL(image);
}

let init = () => {
  jte.jteF($);
  $('#content').jqte();
  QQ.set.byId.click('submit', submit);
  QQ.set.byId.click('show', preview);
  QQ.set.byId.change('imageUploader', upload);
  QQ.set.byId.checked('isVisible', true);
}

export default {
  init
}