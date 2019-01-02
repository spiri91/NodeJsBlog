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
            color: #f8f9fa !important;
            margin-top: 1rem;
        }

        .titleContainer{
            background-image: url('./darkForest3.jpeg') !important;
            height: 18rem;
            color: #f8f9fa !important;
            font-family: 'Charm', cursive;
            background-size: 100% 120%;
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
        
        .blog-card:hover{
            cursor: pointer !important;
        }

        .action-btn-container{
            position: fixed;
            bottom: 2rem;
            right: 2rem;
        }

        .buttons {
            box-shadow: 0px 5px 11px -2px rgba(0, 0, 0, 0.18), 
                        0px 4px 12px -7px rgba(0, 0, 0, 0.15);
            border-radius: 50%;
            display: block;
            width: 56px;
            height: 56px;
            margin: 20px auto 0;
            position: relative;
            -webkit-transition: all .1s ease-out;
                    transition: all .1s ease-out;  
        }

        .buttons:active, 
        .buttons:focus 
        {
            box-shadow: 0 0 4px rgba(0,0,0,.14),
                0 4px 8px rgba(0,0,0,.28);
        }

        .buttons:not(:last-child) {
            width: 40px;
            height: 40px;
            margin: 20px auto 0;
            opacity: 0;
            -webkit-transform: translateY(50px);
                -ms-transform: translateY(50px);
                    transform: translateY(50px);
        }

        .container:hover 
        .buttons:not(:last-child) {
            opacity: 1;
            -webkit-transform: none;
                -ms-transform: none;
                    transform: none;
            margin: 15px auto 0;
        }

        /* Unessential styling for sliding up buttons at differnt speeds */

        .buttons:nth-last-child(1) {
            -webkit-transition-delay: 25ms;
                    transition-delay: 25ms;
            background-image: url(icon192x192.png);
            background-size: contain;
            padding: 0.2rem;
            background-origin: content-box;
        }

        .buttons:hover{
            transform: rotate(20deg);
            transition-duration: 0.2s;
        }

        .buttons{
            transition-duration: 0.2s;
            border: none;
        }

        .buttons:not(:last-child):nth-last-child(2) {
            -webkit-transition-delay: 50ms;
                    transition-delay: 20ms;
            background-image: url('next-arrow.png');
            background-size: contain;
        }

        .buttons:not(:last-child):nth-last-child(3) {
            -webkit-transition-delay: 75ms;
                    transition-delay: 40ms;
            background-image: url('back-arrow.png');
            background-size: contain;
        }

        .buttons:not(:last-child):nth-last-child(4) {
            -webkit-transition-delay: 100ms;
                    transition-delay: 60ms;
            background-image: url('share.png');
            background-size: contain;
        }

        /* Show tooltip content on hover */

        [tooltip]:before {
            bottom: 25%;
            font-family: arial;
            font-weight: 600;
            border-radius: 2px;
            background: #585858;
            color: #fff;
            content: attr(tooltip);
            font-size: 12px;
            visibility: hidden;
            opacity: 0;
            padding: 5px 7px;
            margin-right: 12px;
            position: absolute;
            right: 100%;
            white-space: nowrap;
        }

        [tooltip]:hover:before,
        [tooltip]:hover:after {
            visibility: visible;
            opacity: 1;
        }

        @media screen and (max-width: 650px) {
            .mainTitle{
                letter-spacing: 1px;
            }

            .titleContainer{
                height: 14rem;
            }

            .action-btn-container{
                right: 1rem;
            }
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

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="blog-card spring-fever" style="background: url({{image}}) center no-repeat;" go-to="{{smug}}">
                        <div class="title-content">
                            <h3><a href='#/article/{{smug}}'>{{title}}</a></h3>
                            <div class="intro"> <a href='#/article/{{smug}}'>{{description}}</a> </div>
                        </div>
                        <div class="card-info">
                            <br>
                            <img src="icon512x512.png" height="180px" alt="Image preview..." id="imagePreview">
                            <br>
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
        <div class='action-btn-container'>
            <nav class="container"  > 
                <button class="buttons share" tooltip="sharing is caring"></button>
                <button class="buttons previous-page" tooltip="inapoi"></button>
                <button class="buttons next-page" tooltip="pagina urmatoare"></button>
                <button class="buttons main-action-btn"></button>
            </nav>
        </div>
    </div>` 
}
