export default {
  home:
    `<div class='mainPageArticles'>
    <div class='row'>
        {{#.}}
        <div class="col-sm-4 col-xs-12">
            <a class="card" href='#/article/{{smug}}'>
                <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{description}}</p>
                <p>on: {{date}}</p>
                </div>
            </a>
        </div>
        {{/.}}
    </div>

        <br> <br>
        <div id="Pagination"></div>
    </div>` 
}
