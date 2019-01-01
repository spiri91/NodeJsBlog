export const footer = `
<style>
  #Footer {
    position: fixed;
    bottom: -5px;
    width: 100%;
    background-color: white !important;
    color: black;
  }

  a {
    cursor: pointer !important;
  }

  .black-color{
    color: black;
  }

  .donate{
    float: left;
    margin-right: 1rem;
  }

  .as1{
    float: left;
    text-indent: 1rem;
  }

  .some-ads-btn{
    color: black;
    font-style: italic;
    margin-left: 1rem;
  }

  .alert-dismissible .row{
      background-color: transparent;
  } 

  .moneyBtns{
    float: right;
    margin-right: 2rem;
  }

  @media screen and (max-width: 650px) {
      .as1{
        width: 100%;
        text-indent: 1rem !important;
        text-align: justify;
      }

      .moneyBtns{
        margin-right: 0;
        margin-bottom: 0.5rem;
      }

      .donate{
        margin-right: 0.5rem;
      }

      .some-ads-btn{
        margin-left: 0.5rem;
      }

      .random1{
       
      }
  }
</style>
    <div class="alert alert-dismissible fade show black-color" role="alert">
        <p class='as1'>Susţine, jumătate din banii donaţi sau câştigaţi prin Google AdSense vor susţine o cauză nobilă aleasă de voi. </p> 
        <div class='moneyBtns'>
          <div class="donate">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="ng-pristine ng-valid">
                    <input type="hidden" name="cmd" value="_s-xclick" autocomplete="off">
                    <input type="hidden" name="hosted_button_id" value="WW33LR9UJUDBY" autocomplete="off">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                </form>
          </div>
          <span class='as2'> sau click on </span>  
          <a class='alert-link some-ads-btn' href='#/ads'>Some ads</a>
        </div>

        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
        </button>
    </div>
`