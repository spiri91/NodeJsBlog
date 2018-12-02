export default {
  home:
    `
    <style>
        .mainPageArticles .card:first-child{
            width:100% !important;
        }

        .homePage a{
            color: #212529;
        }

        .card, .card *{
            background-color: #F0F0F0;
        }

        .card{
            transition-duration: 0.3s;
        }

        .card:hover {
            background-color: #8b0000 !important;
            transition-duration: 0.3s;
        }

        .title{
            padding: 1.5rem;
            pointer-events: none;
        }
    </style>
    <div class='homePage'>
        <div class='row'>
            <div class='col-sm-12'>
                <div class='title'>
                    <h3>BuzeReci.ro</h3>
                <div>
            </div>
        </div>
        <div class='mainPageArticles'>
            
            <div id='firstArticle' class='col-sm-12'></div>

            <div class='row'>
                {{#.}}
                <div class="col-sm-4 col-xs-12 card">
                    <div class='row'>
                        <div class='col-xs-6'>
                            <a class href='#/article/{{smug}}'>
                                <div class="card-body">
                                <h5 class="card-title">{{title}}</h5>
                                <p class="card-text">{{description}}</p>
                                <p>pe: {{date}}</p>
                                </div>
                            </a>
                        </div>
                        <div class='col-xs-6'>
                            <image class='cardImage' src="{{image}}">
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
