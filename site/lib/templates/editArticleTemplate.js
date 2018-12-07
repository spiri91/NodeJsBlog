export default {
  edit:
    `
    <style>
        #MainContent .row{
            padding: 0.2rem;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
        }

        #MainContent .col-sm-6, #MainContent .col-xs-12, #MainContent .col-sm-2{
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
            height: 22.4rem;
        }

        #jsScriptInputContainer, #htmlPreview{
            height: 12rem;
        }

        .buttons{
            text-align: center;
        }

        .buttons button{
            margin-right: 5rem;
            margin-top: 2rem;
        }

        #Footer{
            display: none;
        }

        .emptyDiv{
            height: 4rem !important;
        }
    </style>
    <div class='row'> 
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
        <div class='col-sm-6'>
            <textarea class="content" id="content"></textarea>
        </div>
        <div class='col-sm-6'>
            <textarea class="form-control" id="cssInputContainer" placeholder='styles'></textarea>
        </div>
    </div>
    <div class='row'>
        <div class='col-sm-6'>
            <textarea class="form-control" id="jsScriptInputContainer" placeholder='js script'></textarea>
        </div>

        <div class='col-sm-6'>
            <textarea class="form-control" id="htmlPreview" placeholder='html preview'></textarea>
        </div>
    </div>
    <div class='row'>
        <div class='col-sm-6'>
            <span>Select image</span><br>
            <input type="file" id="imageUploader"><br>
            <img src="" height="200px" alt="Image preview..." id="imagePreview">
        </div> 
        <div class='col-sm-6'> 
            <div class='buttons'>
                <button id="show" class='btn btn-default'> Preview </button>
                <button id="submit" class='btn btn-success'> Submit </button>
            </div>
            
        </div>
    </div>`
}