export const mainArticle = `
 <style>
    .mainArticle{
        font-size: larger;
    }
 </style>

 <div class='row'>
    <div class="col-sm-12 col-xs-12 card">
        <div class='row'>
            <div class='col-xs-6'>
                <a class="mainArticle" href='#/article/{{smug}}'>
                    <div class="card-body">
                    <h4 class="card-title">{{title}}</h4>
                    <p class="card-text">{{description}}</p>
                    <p>pe: {{date}}</p>
                    </div>
                </a>
            </div>
            <div class='col-xs-6'>
                <image class='cardImage' src="{{image}}">
            </div>
        </div>
        
        
    </div>
 <div>
`