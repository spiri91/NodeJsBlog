export const footer = `
<style>
  a {
    cursor: pointer !important;
  }

  .black-color{
    color: black;
  }

  .donate{
    float: left;
    margin-left: 2rem;
    margin-right: 0.3rem;
  }

  .as1{
    float: left;
  }

  .some-ads-btn{
    color: black;
    font-style: italic;
    margin-left: 2rem;
  }

  @media screen and (max-width: 650px) { 
    .alert-dismissible .row{
        background-color: transparent;
    }
  }
</style>
    <div class="alert alert-primary alert-dismissible fade show black-color" role="alert">
      <div class='row'>
        <div class='col-xs-12 col-sm-2'>
          <span class='as1'>Sustine, </span> 
          <div class="donate">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="ng-pristine ng-valid">
                    <input type="hidden" name="cmd" value="_s-xclick" autocomplete="off">
                    <input type="hidden" name="hosted_button_id" value="WW33LR9UJUDBY" autocomplete="off">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                </form>
          </div>
        </div>

        <div class='col-xs-12 col-sm-2'>
          <span class='as2'> sau click on </span>  
          <a class='alert-link some-ads-btn' href='#/ads'>Some ads</a>
          
        </div>
      </div>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
      </button>
    </div>
`