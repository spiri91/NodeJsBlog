import $ from 'jquery';
import QQ from '../lib/js/myQuery';
import Article from './article';
import call from '../lib/js/call';
import '../lib/css/jquery-te-1.4.0.css';
import jte from '../dist/js/jquery-te-1.4.0.min';
import templates from '../lib/js/templates';

let theImage = null;

function submit() {
  let token = QQ.get.byId.value('token');

  let article = new Article(
    QQ.get.byId.value('title'),
    QQ.get.byId.value('description'),
    QQ.get.byId.value('htmlContent'),
    QQ.get.byId.checkedState('isVisible'),
    QQ.get.byId.value('cssInputContainer'),
    theImage,
    QQ.get.byId.value('jsScriptInputContainer')
  );

  return call.post(article, token)
    .then(() => QQ.alert.success('created'))
    .catch((e) => { console.log(e); QQ.alert.error(e.message); });
}

function preview() {
  let css = QQ.get.byId.value('cssInputContainer');
  let content = QQ.get.byId.value('htmlContent');
  let jsScript = QQ.get.byId.value('jsScriptInputContainer');

  templates.previewArticle({ css, content, jsScript });
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

function addEventToFullModeEditor() {
  QQ.set.byId.click('fullModeEditor', () => {
    QQ.get.byClass.withCallBack('jqte', (_) => {
      _.classList.toggle('fullScreen');
    })
  });
}

function addElmToJqteEditor(elm) {
  QQ.get.byClass.withCallBack('jqte_toolbar', (_) => {
    _.insertAdjacentHTML('beforeend', elm);
    addEventToFullModeEditor();
  })
}

function addFullModeTextForm() {
  let elm = `
  <div class="jqte_tool jqte_tool_22 unselectable" role="button" data-tool="21" unselectable="on" style="user-select: none;">
    <a unselectable="on" style="user-select: none;" id="fullModeEditor">Full mode</a>
  </div>
  `

  addElmToJqteEditor(elm);
}

let init = () => {
  jte.jteF($);
  $('#content').jqte();
  QQ.set.byId.click('submit', submit);
  QQ.set.byId.click('show', preview);
  QQ.set.byId.change('imageUploader', upload);
  QQ.set.byId.checked('isVisible', true);

  QQ.set.byClass.input('jqte_editor', () => {
    let output = QQ.get.byClass.innerHtml('jqte_editor');
    QQ.set.byId.innerHtml('htmlPreview', output);
  });

  addFullModeTextForm();
}

export default {
  init
}