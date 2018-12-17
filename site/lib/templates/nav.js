export const nav = `
<style>
  .nav-link:hover{
    color: blanchedalmond !important;
    transition-duration: 0.2s;
  }

  .navbar-brand{
    border: 1px solid white;
    border-radius: 50px;
    text-align: center;
    width: 4rem;
    font-size: 1.4rem;
    transition-duration: 0.3s;
  }

  .nav-link{
    color: #f8f9fa !important;
  }

  .shareLinksDropDown{
    background-color: inherit;
    border: none;
    margin-right: 6rem;
  }

  .shareLinksContainer{
    background-color: #202020 !important;
  }

  .shareLinksContainer a{
    padding: 0.2rem;
  }

  .nav-item{
    margin-right: 2rem;
  }
</style>

<div class='row'>
  <div class='col-sm-12 col-xs-12'>
    <nav class="navbar navbar-expand-lg navbar navbar-light" style="background-color: #202020;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#/about">Despre... <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Nu uita sa imi scrii <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <div class="dropdown shareLinks pull-right">
            <div  class="a2a_kit a2a_kit_size_32 a2a_default_style">
                <a class="dropdown-toggle btn btn-success shareLinksDropDown" data-toggle="dropdown" href="#">
                    Sharing is caring
                </a>
                <ul class="dropdown-menu shareLinksContainer">
                    <a class="a2a_button_facebook"></a>
                    <a class="a2a_button_twitter"></a>
                    <a class="a2a_button_email"></a>
                    <a class="a2a_button_linkedin"></a>
                    <a class="a2a_button_whatsapp"></a>
                    <a class="a2a_button_facebook_messenger"></a>
                </ul>
            </div>
        </div>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" id="SearchInput" placeholder="Caută" aria-label="Search">
        </form>
      </div>
    </nav>
  </div>
</div>
`;