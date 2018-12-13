export default {
  home:
    `
    <style>
        .mainPageArticles .card:first-child{
            width:100% !important;
        }

        .title{
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
            color: white;
            margin-top: 1rem;
        }
    </style>
    <div class='homePage'>
        <div class='row'>
            <div class='col-sm-12'>
                <div class='title'>
                    <h3>BuzeReci.ro</h3>
                    <p class='forHerP'>Pentru ea... </p>
                <div>
            </div>
        </div>
        <div class='mainPageArticles'>
            
            <div id='firstArticle' class='col-sm-12'></div>

            <div class='row'>
                {{#.}}
                <div class="col-sm-4 col-xs-12 card-holder">

                    <div class="card">
                        <img class="card-img-top" src="{{image}}" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">{{title}}</h4>
                            <p class="card-text">{{description}}</p>
                            <p class="card-text card-date">{{date}}</p>
                            <a href='#/article/{{smug}}' class="btn btn-success btn-continue">Continuare</a>
                        </div>
                    </div>
                </div>
                {{/.}}
            </div>

            <br>
            <div id="Pagination"></div>
        </div>
    </div>` 
}
