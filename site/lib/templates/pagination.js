export const pagination = `

<style>
  .pagination{
    margin-left: 1rem !important;
    margin-bottom: -3rem !important;
    z-index: 10;
    opacity: 0.8;
  }

  .pagination .disabled{
    color: rgb(33, 37, 41) !important;
    background-color: transparent;
  }

  @media screen and (max-width: 650px) {
      .pagination {
         margin-bottom: 1rem !important;
      }
  }

</style>
    <nav>
      <ul class="pagination">
          <li class="page-item disabled" disabled><a class="page-link disabled" disabled>Pagina: </a></li>
          {{#.}}
          <li class="page-item" data-page-link="{{.}}"><a class="page-link" href="#/page/{{.}}">{{.}}</a></li>
          {{/.}}
      </ul>
    </nav>
`