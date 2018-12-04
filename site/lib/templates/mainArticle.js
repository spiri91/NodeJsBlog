export const mainArticle = `
 <style>
    .mainArticle{
        font-size: larger;
    }

    .mainCardImage{
        object-fit: cover;
        width: 100%;
        height: 12rem;
    }
    
    .mainArticle .card-body{
        text-align: center;
    }
 </style>

 <div class='row'>
    <div class="col-sm-12 col-xs-12 card">
        <div class='row'>
            <div class='col-sm-5'>
                <a class="mainArticle" href='#/article/{{smug}}'>
                    <div class="card-body">
                        <h4 class="card-title">{{title}}</h4>
                        <p class="card-text">{{description}}</p>
                        <p>pe: {{date}}</p>
                    </div>
                </a>
            </div>
            <div class='col-sm-7'>
                <image class='mainCardImage' src="{{image}}">
            </div>
        </div>
        
        
    </div>
 <div>
`