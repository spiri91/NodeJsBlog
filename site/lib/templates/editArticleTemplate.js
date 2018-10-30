export default {
  edit:
    `<div class="editArticle">
        <input type="text" placeholder="token" id="token"><br><br>
        <input type="text" placeholder="title" value="{{title}}" id="title"><br><br>
        <input type="text" placeholder="description" value="{{description}}" id="description"><br><br>
        <textarea class="content" id="content">{{content}}</textarea><br><br>
        <button id="submit"> Submit </button><br><br>
        <input type="checkbox" id="isVisible" {{#visible}} checked {{/visible}}> Visible<br>
        <span>END</span>
    </div>`
}