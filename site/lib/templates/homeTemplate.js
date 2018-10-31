export default {
  home:
    `<div class='mainPageArticles'>
        {{#.}}
            <div class='mainPageArticle' data-target-smug='{{smug}}'>
            <h5>{{title}}</h5>
            <span>{{description}}</span><br>
            <span>{{date}}</span><br>
            <br>
            </div>
        {{/.}}

        <br> <br>
        <input type="button" value="previous" id="movePrevious"/>
        <input type="button" value="next" id="moveNext"/>
    </div>` 
}
