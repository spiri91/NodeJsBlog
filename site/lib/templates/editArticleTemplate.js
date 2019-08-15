export default {
  edit:
    `
    <style>
        #MainContent .row{
            padding: 0.2rem;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
        }

        #MainContent .col-sm-6, #MainContent .col-xs-12, #MainContent .col-sm-2, #MainContent .col-sm-9, #MainContent .col-sm-3{
            padding: 0.2rem !important;
        }

        .jqte{
            margin-top: 0;
            margin-bottom: 0;
        }
        
        .jqte_editor{
            height: 20rem;
        }

         #cssInputContainer{
            height: 22.2rem;
        }

        #jsScriptInputContainer, #htmlPreview, #htmlContent{
            height: 12rem;
        }

        .buttons{
            text-align: center;
        }

        .buttons button{
            margin-right: 2rem;
        }

        #isVisible{
            height: 1.8rem;
        }

        #Footer{
            display: none;
        }

        .createLabel{
            font-weight: 600;
            padding: 0.5rem;
        }

        .emptyDiv{
            height: 4rem !important;
        }

        .fullScreen{
            position: fixed;
            width: 100%;
            height: 108%;
            left: 0;
            top: 0;
            background: rgba(51,51,51,0.7);
            z-index: 10;
        }

        .fullScreen .jqte_editor{
            height: 100% !important;
            background-color: black;
            color: #f8f9fa!important;
        }

        .special-characters-container {
            width: 20rem;
            float: left;
            margin-right: 2rem;
            margin-bottom: 1rem;
        }
    </style>
    <div class='row'> 
        <div class='col-sm-12'>
            <p class='createLabel'>Create new article:</p>
        </div>
        <div class='col-sm-12'>
            <input type='text' class='form-control special-characters-container' value='ă Ă â Â î Î ş Ş ţ Ţ'/>
            <a href='http://www.degraeve.com/reference/specialcharacters.php'>Special html characters</a>
        </div>
        <div class='col-xs-12 col-sm-6'>
            <input type="text" placeholder="token" id="token" class="form-control">
        </div>
        <div class='col-xs-12 col-sm-6'>
            <input type="text" class="form-control" placeholder="title" value="{{title}}" id="title">
        </div>
        <div class='col-xs-12 col-sm-6'>
            <input type="text" class="form-control" placeholder="description" value="{{description}}" id="description">
        </div>
        <div class='col-xs-12 col-sm-6'>
            <div class='row'>
                <div class='col-xs-2 col-sm-2'>
                    <input type="checkbox" class='form-control' id="isVisible" {{#visible}} checked {{/visible}}>
                </div>
                <div class='col-xs-6 col-sm-6'>
                    <h5>Visible</h5>
                </div>
            </div>
        </div>
    </div>

    <div class='row'>
        <div class='col-sm-9'>
            <textarea class="content" id="content"></textarea>
        </div>
        <div class='col-sm-3'>
            <textarea class="form-control" id="cssInputContainer" placeholder='styles'></textarea>
        </div>
    </div>
    <div class='row'>
        <div class='col-sm-6'>
            <textarea class="form-control" id="jsScriptInputContainer" placeholder='js script'></textarea>
        </div>

        <div class='col-sm-6'>
            <textarea class="form-control" id="htmlPreview" placeholder='text html preview'></textarea>
        </div>
    </div>
    <div class='row'>
        <div class='col-sm-12'>
            <textarea class="form-control" id="htmlContent" placeholder='html content'></textarea>
        </div>
    </div>
    <div class='row'>
        <div class='col-sm-6'>
            <input type="file" id="imageUploader"><br>
            <img src="" height="200px" alt="Image preview..." id="imagePreview">
        </div> 
        <div class='col-sm-6'> 
            <div class='buttons pull-right'>
                <button id="show" class='btn btn-info'> Preview </button>
                <button id="showAfterSave" class='btn btn-info'> Show after save </button>
                <button id="openInEdit" class='btn btn-warning'> Open in edit </button>
                <button id="submit" class='btn btn-success'> Save </button>
            </div>
        </div>
    </div>`
}