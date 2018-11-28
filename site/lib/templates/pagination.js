export const pagination = `

<style>
  .pagination{
    margin-left: 1rem !important;
    margin-bottom: 3.5rem;
    z-index: 10;
  }

</style>
<div class='row'>
  <div class='col-xs-12 col-sm-12'>
    <nav>
      <ul class="pagination">
          <li class="page-item disabled" disabled><a class="page-link" disabled>Pagina: </a></li>
          {{#.}}
          <li class="page-item" data-page-link="{{.}}"><a class="page-link" href="#/page/{{.}}">{{.}}</a></li>
          {{/.}}
      </ul>
    </nav>
  </div>
</div>
`