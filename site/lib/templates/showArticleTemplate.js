export default {
  show: 
    `
    <style>
        .singleArticle .row{
            padding-top: 1rem !important;
            padding-bottom: 0rem !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
        }

        .centered{
            text-align: center;
            align-items: center;
            align-self: center;
        }    

        .singleArticle .title {

        }

        .fontWeight-700{
            font-weight: 700;
        }

        .marginRight-1Rem{
            margin-right: 1rem !important;
        }

        .marginBottom-05Rem{
            margin-bottom: 0.5rem;
        }    

        .marginBottom-2Rem{
            margin-bottom: 2rem;
        }

        .marginTop-2rem{
            margin-top: 2rem;
        }

        .singleArticle .description {
            font-size: larger;
            font-family: cursive;
        }

        .italic {
            font-style: italic;
        }

        .newComment{
            backgrond-color: #F0F0F0;
        }

        .singleArticle .articleContent{

        }

        .theImage{
            object-fit: cover;
            width: 100%;
            height: 12rem;
        }

        .titleContainer{
            margin-top: -5rem
        }

        .titleContainer .row, .titleContainer .col-sm-12{
            background-color: transparent;
        }

        .newComment {
            right: 0.4rem;
            display: block;
            position: fixed;
            bottom: 3rem;
            height: 13rem;
            width: 25rem;
            background-color: #D3D3D3;
            padding: 1rem;
            border-radius: 15px;
        }

        .newComment .form-control {
            margin-top: 1rem;
        }

        .newComment .btn {
            margin-top: 1rem;
        }

        .stickyFooter{
            position: fixed;
            bottom: 0.1rem;
            right: 0.3rem;
        }

        .commentsSection{
            display: block;
            height: 15rem;
            position: fixed;
            bottom: 3rem;
            overflow-y: scroll;
            width: 100%;
            background-color: #D3D3D3;
            padding: 1rem;
        }

        .mist .stickyFooter button {
            opacity: 1;
        }

        .mist #Nav{
            opacity: 0.5;
        }

        .mist .singleArticle {
            opacity: 0.5;
        }

        .mist .newComment {
            opacity: 1;
        }

        .mist .commentsSection {
            opacity: 1;
        }

        @media screen and (max-width: 650px){
            .newComment {
                width: 22rem;
            }

           
        }

        @media screen and (min-width: 650px){
            .commentsSection{
                display: block;
                width: 30rem;
                position: fixed;
                right: 1rem;
                bottom: 3rem;
            }
        }
        {{{css}}}
    </style>

    <div class="singleArticle">
        <div>
            <image src="{{image}}" class='theImage'/>
        </div>
        <div class='row titleContainer'>
            <div class='col-sm-12'>
                <h1 class='title centered'>{{title}}<h1>
            </div>
        </div>
        <div class='row'>
            <div class='col-sm-12'> 
                <span class='description'>{{description}}</span>
            </div>
        </div>
        <div class='row'>
            <div class='col-sm-12'>
                <div class='articleContent' id='articleContent'>{{{content}}}</div>
            </div>

            <script id='leScript'>
                {{{jsScript}}}
            </script>
        </div>
        
    </div>

    <div class='stickyFooter'>
        <button type="button" class="btn btn-sm btn-primary show-comments-js">
            Comentarii <span class="badge badge-light">{{commentsCount}}</span>
        </button>

        <button type='button' class="btn btn-sm btn-success add-comment-js">
            Adauga comentariu
        </button>
     </div>

    <div class='commentsSection'>
        <div class='row'>
            {{#comments}}
                <div class='col-sm-12'>
                    <span class='fontWeight-700'>{{by}} </span>
                    <span> pe </span> <span class='fontWeight-700'> {{date}}</span> :
                    <span class='marginRight-1Rem italic'> {{content}}</span>
                </div>
                <hr>
            {{/comments}}
        </div>
    </div>

    <div class='newComment'>
        <div class='row'>
            <div class='col-sm-12'>
                <input type='text' placeholder='nume' class='form-control' id='newCommentPoster'/>
            </div>
        </div>
        <div class='row'>
            <div class='col-sm-12'> 
                <input type='text' class='form-control' placeholder='comentariu' id='newCommentText'/>
            </div>
        </div>
        <div class='row'>
            <div class='col-sm-12'>
                <input type='button' class='btn btn-success' value='Adaugă' id='newCommentPost' />
            </div>
        </div>
    </div>
    `
}