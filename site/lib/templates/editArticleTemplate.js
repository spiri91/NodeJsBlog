export default {
  edit:
    `
    <style>
        #MainContent .row{
            padding: 0.2rem;
        }

        #MainContent .col-sm-6, #MainContent .col-xs-12, #MainContent .col-sm-2{
            padding: 0.2rem !important;
        }

        .jqte_editor{
            height: 150rem;
        }

        #Footer{
            display: none;
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
        <div class='col-xs-12 col-sm-12'>
            <textarea class="content" id="content"></textarea>
        </div>
        <div class='col-xs-6 col-sm-2'>
            <button id="submit" class='btn btn-success'> Submit </button>
        </div>
        <div class='col-xs-6 col-sm-2'>
            <button id="show" class='btn btn-default'> Preview </button>
        </div>
    </div>`
}