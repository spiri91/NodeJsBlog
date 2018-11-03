export default {
  home:
    `<div class='mainPageArticles'>
        {{#.}}
            <a class='mainPageArticle' href='#/article/{{smug}}'>
            <h5>{{title}}</h5>
            <span>{{description}}</span><br>
            <span>{{date}}</span><br>
            <br>
            </a>
        {{/.}}

        <br> <br>
        <div id="Pagination"></div>
    </div>` 
}
