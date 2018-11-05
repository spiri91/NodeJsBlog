export const pagination = `
<div class='row'>
  <div class='col-xs-12 col-sm-12'>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
          <li class="page-item disabled" disabled><a class="page-link" disabled>Page: </a></li>
          {{#.}}
          <li class="page-item" data-page-link="{{.}}"><a class="page-link" href="#/page/{{.}}">{{.}}</a></li>
          {{/.}}
      </ul>
    </nav>
  </div>
</div>
`