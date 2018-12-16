export default {
  home:
    `
    <style>
        .mainPageArticles .card:first-child{
            width:100% !important;
        }

        ._title{
            padding: 1.5rem;
            pointer-events: none;
        }

        .cardImage{
            object-fit: cover;
            width: 100%;
            height: 12rem;
        }

        .forHerP{
            font-style: italic;
            font-size: 1.2rem;
            font-weight: 30;
            margin-top: 2rem;
        }

        a:hover{
            text-decoration: none;
        }

        .card-holder{
            height: 26rem;
            padding: 0.2rem;
        }

        .card{
            height: 100%
        }

        .card .card-img-top{
            object-fit: cover;
            width: 100%;
            height: 13rem;
        }

        .btn-continue{
            color: #f8f9fa!important;
            margin-top: 1rem;
        }

        .titleContainer{
            background-image: url('./darkForest.jpg') !important;
            height: 20rem;
            color: #f8f9fa !important;
            font-family: 'Charm', cursive;
        }

        .mainTitle{
            letter-spacing: 13px;
            font-weight: 600;
            font-size: 3rem;
        }

        .card-body{
            background-color: rgb(108, 117, 125);
            color: white;
            border-radius: 2%;
            font-weight: 500;
        }
        #firstArticle{
            margin-bottom: 1rem;
        }

    </style>
    <div class='homePage'>
        <div class='row titleContainer '>
            <div class='col-sm-12 transparent'>
                <div class='_title'>
                    <h1 class='mainTitle'>BuzeReci.ro</h1>
                    <h3 class='forHerP'>Pentru ea... </h3>
                </div>
            </div>
            <div id="Pagination"></div>
        </div>
        
        <div class='mainPageArticles'>
            
            <div class='row'>
                {{#.}}

                <div class="col-sm-4 col-xs-12">
                    <div class="blog-card spring-fever" style="background: url({{image}}) center no-repeat;">
                        <div class="title-content">
                            <h3><a href='#/article/{{smug}}'>{{title}}</a></h3>
                            <div class="intro"> <a href='#/article/{{smug}}'>Pentru ea</a> </div>
                        </div>
                        <div class="card-info">
                            {{description}}
                            <a href='#/article/{{smug}}' class="btn btn-success">Continuare...</a>
                        </div>
                        <div class="utility-info">
                            <ul class="utility-list">
                            <li><span class="licon icon-dat"></span>{{date}}</li>
                            </ul>
                        </div>
                        <div class="gradient-overlay"></div>
                        <div class="color-overlay"></div></div>
                    </div>
                {{/.}}
            </div>
        </div>
        <br>
    </div>` 
}
