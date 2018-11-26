export const nav = `
<style>
  .nav-link:hover{
    color: blanchedalmond !important;
    transition-duration: 0.2s;
  }
</style>

<div class='row'>
  <div class='col-sm-12 col-xs-12'>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Despre mine <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Scrie-mi <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" id="SearchInput" placeholder="Caută" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" id="SearchButton">Caută</button>
        </form>
      </div>
    </nav>
  </div>
</div>
`;