export default {
  edit:
    `<div class='row'> 
        <div class="editArticle">
            <div class='col-xs-10 col-xs-offset-1'>
                <input type="text" placeholder="token" id="token">
            </div>
            <div class='col-xs-10 col-xs-offset-1'>
                <input type="text" placeholder="title" value="{{title}}" id="title">
            </div>
            <div class='col-xs-10 col-xs-offset-1'>
                <input type="text" placeholder="description" value="{{description}}" id="description">
            </div>
            <div class='col-xs-10 col-xs-offset-1'>
                <textarea class="content" id="content"></textarea>
            </div>
            <div class='col-xs-6'>
                <button id="submit"> Submit </button>
            </div>
            <div class='col-xs-6'>
                <button id="show"> Preview </button>
            </div>
            <div class='col-xs-6'>
                <input type="checkbox" id="isVisible" {{#visible}} checked {{/visible}}> Visible
            </div>
        </div>
    </div>`
}