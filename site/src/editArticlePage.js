import $ from 'jquery';
import QQ from '../lib/js/myQuery';
import call from '../lib/js/call';
import '../lib/css/jquery-te-1.4.0.css';
import jte from '../dist/js/jquery-te-1.4.0.min';
import templates from '../lib/js/templates';

let etArticle;

function submit() {
  let token = QQ.get.byId.value('token');

  etArticle.title = QQ.get.byId.value('title');
  etArticle.description = QQ.get.byId.value('description');
  etArticle.content = QQ.get.byId.value('htmlContent');
  etArticle.visible = QQ.get.byId.checkedState('isVisible');
  etArticle.smug = etArticle.title.replace(' ', '-');
  etArticle.css = QQ.get.byId.value('cssInputContainer');
  etArticle.jsScript = QQ.get.byId.value('jsScriptInputContainer')

  return call.put(etArticle._id, etArticle, token)
    .then(() => QQ.alert.success('edited'))
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
    etArticle.image = reader.result;
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

let init = (article) => {
  delete article.comments;

  etArticle = article;

  jte.jteF($);
  $('#content').jqte();

  QQ.set.byClass.innerHtml('jqte_editor', article.content);
  QQ.set.byId.innerHtml('cssInputContainer', article.css);
  QQ.set.byId.innerHtml('jsScriptInputContainer', article.jsScript);
  QQ.set.byId.innerHtml('htmlContent', article.content);

  QQ.set.byId.click('submit', submit)
  QQ.set.byId.click('show', preview);
  QQ.set.byId.change('imageUploader', upload);
  QQ.set.byClass.input('jqte_editor', () => {
    let output = QQ.get.byClass.innerHtml('jqte_editor');
    QQ.set.byId.innerHtml('htmlPreview', output);
  });

  addFullModeTextForm();
}

export default {
  init
}