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
        <div class='row'> 
            <div class='col-sm-12'>
                <hr>
                <span class='commmentsStart fontWeight-700'> Comentarii: </span 
            </div>
        <div> 
        <div class='row commentsSection'>
            {{#comments}}
                <div class='col-sm-12 marginBottom-05Rem'>
                    <span class='fontWeight-700'>{{by}} </span>
                    <span> pe </span> <span class='fontWeight-700'> {{date}}</span> :
                    <span class='marginRight-1Rem italic'> {{content}}</span>
                </div>
                <hr>
            {{/comments}}
        </div>
        <br><br>
        <div class='newComment'>
            <div class='row'>
                <div class='col-sm-4 col-xs-12'>
                    <input type='text' placeholder='nume' class='form-control' id='newCommentPoster'/>
                </div>
            </div>
            <div class='row'>
                <div class='col-xs-12 col-sm-4'> 
                    <input type='text' class='form-control' placeholder='comentariu' id='newCommentText'/>
                </div>
            </div>
            <div class='row marginBottom-2Rem'>
                <div class='col-xs-12 col-sm-6'>
                    <input type='button' class='btn btn-success' value='Adaugă' id='newCommentPost' />
                </div>
            </div>
        </div>
    </div>
    `
}