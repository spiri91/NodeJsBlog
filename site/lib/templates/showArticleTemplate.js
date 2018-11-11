export default {
  show: 
    `<div>
        <h3>{{title}}<h3>
        <span>{{description}}</span></br><br>
        <div class='articleContent' id='articleContent'></div><br>
        <input type='text' placeholder='comment' id='newCommentText'/><br>
        <input type='text' placeholder='name' id='newCommentPoster'/> <br>
        <input type='button' value='Post' id='newCommentPost' /><br> 
        <br>
        <span>END</span>
        <h3>Comments<h3>
        <ul>
        {{#comments}}
            <li>{{by}}: {{content}}  || {{date}}</li>
        {{/comments}}
        </ul>
    </div>`
}