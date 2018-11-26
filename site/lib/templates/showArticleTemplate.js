export default {
  show: 
    `
    <style>
        .singleArticle .row{
            padding-top: 1rem !important;
            padding-bottom: 0rem !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
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

        .row{
            background-color: #F0F0F0;
        }
    </style>

    <div class="singleArticle">
        <div class='row'>
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
                <div class='articleContent' id='articleContent'></div>
            </div>
        </div>
        <div class='row'> 
            <div class='col-sm-12'>
                <hr>
                <span class='commmentsStart fontWeight-700'> Comments: </span 
            </div>
        <div> 
        <div class='row commentsSection'>
            {{#comments}}
                <div class='col-sm-12 marginBottom-05Rem'>
                    <span class='fontWeight-700'>{{by}} </span>
                    <span> on </span> <span class='fontWeight-700'> {{date}}</span> :
                    <span class='marginRight-1Rem italic'> {{content}}</span>
                </div>
                <hr>
            {{/comments}}
        </div>

        <div class='newComment'>
            <div class='row'>
                <div class='col-sm-4 col-xs-12'>
                    <input type='text' placeholder='name' class='form-control' id='newCommentPoster'/>
                </div>
            </div>
            <div class='row'>
                <div class='col-xs-12 col-sm-4'> 
                    <input type='text' class='form-control' placeholder='comment' id='newCommentText'/>
                </div>
            </div>
            <div class='row marginBottom-2Rem'>
                <div class='col-xs-12 col-sm-6'>
                    <input type='button' class='btn btn-success' value='Post' id='newCommentPost' />
                </div>
            </div>
        </div>
    </div>`
}