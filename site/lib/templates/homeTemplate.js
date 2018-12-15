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
            background-image: url('./darkForest.jpg');
            height: 30rem;
            color: #f8f9fa!important;
            font-family: 'Charm', cursive;
        }

        .mainTitle{
            letter-spacing: 13px;
            font-weight: 600;
            font-size: 3rem;
        }
    </style>
    <div class='homePage'>
        <div class='row titleContainer'>
            <div class='col-sm-12'>
                <div class='title'>
                    <h1 class='mainTitle'>BuzeReci.ro</h1>
                    <h3 class='forHerP'>Pentru ea... </h3>
                </div>
            </div>
        </div>
        
        <div class='mainPageArticles'>
            
            <div id='firstArticle' class='col-sm-12'></div>

            <div class='row'>
                {{#.}}
                <div class="col-sm-3 col-xs-12">
                    <div class="card-holder">
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
                </div>
                {{/.}}
            </div>

            <br>
            <div id="Pagination"></div>
        </div>
    </div>` 
}
