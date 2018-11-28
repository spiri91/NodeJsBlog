export const mainArticle = `
 <style>
    .mainArticle{
        font-size: larger;
    }
 </style>

 <div class='row'>
    <div class="col-sm-12 col-xs-12">
        <a class="card mainArticle" href='#/article/{{smug}}'>
            <div class="card-body">
            <h4 class="card-title">{{title}}</h4>
            <p class="card-text">{{description}}</p>
            <p>pe: {{date}}</p>
            </div>
        </a>
    </div>
 <div>
`